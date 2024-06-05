import { toast } from '@zerodevx/svelte-toast';

export const success = (m) =>
	toast.push(m, {
		dismissable: false,
		theme: {
			'--toastBackground': 'green',
			'--toastColor': 'white',
			'--toastBarHeight': 0
		}
	});

export const info = (m) =>
	toast.push(m, {
		dismissable: false,
		theme: {
			'--toastBackground': 'blue',
			'--toastColor': 'white',
			'--toastBarHeight': 0
		}
	});

export const error = (m) =>
	toast.push(m, {
		dismissable: false,
		theme: {
			'--toastBackground': 'red',
			'--toastColor': 'white',
			'--toastBarHeight': 0
		}
	});
