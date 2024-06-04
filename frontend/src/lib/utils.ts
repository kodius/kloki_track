import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';
import _ from 'lodash';
import { toast } from '@zerodevx/svelte-toast';

export function mapToValueLabel(array) {
    return array.map(item => ({
        value: `${item.id}`,
        label: item.name
    }));
}

export async function handleAsyncOperation(operationFunc, errorMessage) {
    try {
        await operationFunc();
    } catch (error) {
        toast.push(errorMessage, {
            theme: {
                '--toastColor': 'mintcream',
                '--toastBackground': '#EF4444',
                '--toastBarHeight': 0
            }
        });
        throw error;
    }
}

export function updateItemInList<T extends { id: string | number }>(
  list: T[],
  updatedItem: T
): void {
  if (updatedItem.id == null) {
    throw new Error("Updated item must have a valid 'id' field.");
  }

  const index = list.findIndex((item) => item.id === updatedItem.id);
  if (index !== -1) {
    list[index] = updatedItem;
  }
}

export function addItemToList<T extends { id: string | number }>(list: T[], newItem: T): void {
  if (newItem.id == null) {
    throw new Error("New item must have a valid 'id' field.");
  }

  const exists = _.some(list, { id: newItem.id });
  if (!exists) {
    list.push(newItem);
  } else {
    throw new Error("Item with the same 'id' already exists in the list.");
  }
}

export function replaceArrayContent<T>(array: T[], newContent?: T[] | null): void {
  array.splice(0, array.length, ...(newContent ?? []));
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
  y?: number;
  x?: number;
  start?: number;
  duration?: number;
};

export const flyAndScale = (
  node: Element,
  params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
  const style = getComputedStyle(node);
  const transform = style.transform === 'none' ? '' : style.transform;

  const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;

    const percentage = (valueA - minA) / (maxA - minA);
    const valueB = percentage * (maxB - minB) + minB;

    return valueB;
  };

  const styleToString = (style: Record<string, number | string | undefined>): string => {
    return Object.keys(style).reduce((str, key) => {
      if (style[key] === undefined) return str;
      return str + `${key}:${style[key]};`;
    }, '');
  };

  return {
    duration: params.duration ?? 200,
    delay: 0,
    css: (t) => {
      const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
      const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
      const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

      return styleToString({
        transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        opacity: t
      });
    },
    easing: cubicOut
  };
};
