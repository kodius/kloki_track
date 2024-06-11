<script lang="ts">
	import ContentLayout from '$lib/components/shared/content-layout.svelte';
	let month = 'June 2024';
	let days = [
		{ date: '3.', day: 'Mon', hours: '8:30h' },
		{ date: '4.', day: 'Tue', hours: '4:00h' },
		{ date: '5.', day: 'Wed', hours: '2:00h' },
		{ date: '6.', day: 'Thu', hours: '-' },
		{ date: '7.', day: 'Fri', hours: '6:00h' },
		{ date: '8.', day: 'Sat', hours: '6:00h' },
		{ date: '9.', day: 'Sun', hours: '-' }
	];

	let selected = $state(0);
	function selectDay(index) {
		selected = index;
	}

	import { getProjects } from '$lib/stores/projectsStore.svelte';
	import ProjectsSelector from '$lib/components/projects/project-selector.svelte';

	let projects = getProjects();
	let localProjects = $state<Project[]>([]);

	$effect(() => {
		localProjects = projects.map((client) => ({ ...client, isEditing: false }));
	});
</script>

<ContentLayout variant="heading" title="Time Tracker" description="Rapid Entry">
	<div class="flex-1 text-center font-bold">{month}</div>
	<div class="flex w-full pt-4 flex-col md:flex-row">
		<div class="flex w-full md:w-1/4 border border-black">
			<ProjectsSelector {localProjects} />
		</div>
		<div class="flex flex-col w-full">
			<div class="flex pb-0 gap-0 w-full">
				{#each days as { date, day, hours }, i}
					<button onclick={() => selectDay(i)} class="flex-1">
						<div
							class="flex flex-col border
          border-black
          cursor-pointer {i === selected ? 'bg-green-100 border-b-green-100' : ''}"
						>
							<div class="text-center p-2">{date}</div>
							<div
								class="text-center p-2 text-4xl font-bold day-name"
								data-full={day}
								data-short={day[0]}
							></div>
							<div class="text-center p-2">{hours}</div>
						</div>
					</button>
				{/each}
			</div>
			<div class="flex w-full bg-green-100 border border-t-0 border-black min-h-[400px]">
				<div class="p-4 flex-1">
					<h2 class="text-2xl">Details for {days[selected].day}</h2>
					<p>Date: {days[selected].date}</p>
					<p>Hours Worked: {days[selected].hours}</p>
				</div>
			</div>
		</div>
	</div>
</ContentLayout>

<style>
	.day-name::after {
		content: attr(data-full);
	}
	@media (max-width: 1023px) {
		.day-name::after {
			content: attr(data-short);
		}
	}
</style>
