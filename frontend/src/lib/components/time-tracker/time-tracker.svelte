<script lang="ts">
	import ContentLayout from '$lib/components/shared/content-layout.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { getCurrentUser } from '$lib/stores/authStore.svelte';

	import { Fa } from 'svelte-fa';
	import { faTrashAlt as fasTrashAlt } from '@fortawesome/free-solid-svg-icons';

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

	let entries = $state({
		'3.': [
			{
				projectId: 1,
				projectName: 'Run Monitor',
				description: 'Neki jako dobar opis',
				timeHours: '2',
				timeMinutes: '30'
			},
			{
				projectId: 1,
				projectName: 'Run Monitor',
				description: 'Neki jako dobar opis 2',
				timeHours: '4',
				timeMinutes: '30'
			},
			{
				projectId: 2,
				projectName: 'Discovery',
				description: 'Neki jako dobar opis projekt 2',
				timeHours: '4',
				timeMinutes: '45'
			},
			{
				projectId: 3,
				projectName: 'Poplin',
				description: 'Neki jako dobar opis projekt 3',
				timeHours: '5',
				timeMinutes: '17'
			}
		]
	});

	let selectedDayIndex = $state(0);
	function selectDay(index) {
		selectedDayIndex = index;
	}

	let selectedDay = $derived(days[selectedDayIndex]['date']);
	let currentUser = $derived(getCurrentUser());

	function groupEntries() {
		let entriesItems = entries[selectedDay];

		if (entriesItems === undefined) {
			return {};
		}

		let grouped = {};
		entriesItems.forEach((entry) => {
			let projectName = entry.projectName;
			if (!grouped[projectName]) {
				grouped[projectName] = [];
			}
			grouped[projectName].push(entry);
		});
		return grouped;
	}

	let groupedEntries = $derived(groupEntries());

	import { getProjects } from '$lib/stores/projectsStore.svelte';
	import ProjectsSelector from '$lib/components/projects/project-selector.svelte';

	let projects = getProjects();
	let localProjects = $state<Project[]>([]);

	$effect(() => {
		localProjects = projects.map((client) => ({ ...client, isEditing: false }));
	});

	function addEntry(projectName) {
		entries['3.'].push({
			projectId: entries['3.'].length + 1,
			projectName,
			description: '',
			timeHours: '0',
			timeMinutes: '0'
		});
	}

	function deleteEntry(index) {
		entries['3.'].splice(index, 1);
	}

	function updateEntry(index, field, value) {
		entries['3.'][index][field] = value;
	}

	function handleInput(e, index, field) {
		const max = parseInt(e.target.getAttribute('data-max'), 10);
		const value = e.target.value;
		if (/^\d*$/.test(value) && (value === '' || parseInt(value, 10) <= max)) {
			updateEntry(index, field, value);
		} else {
			e.target.value = entry[field];
		}
	}
</script>

<ContentLayout
	variant="heading"
	title="Time Tracker"
	description="Rapid Entry - welcome {currentUser?.firstName} {currentUser?.lastName}"
>
	<div class="flex-1 text-center font-bold">{month}</div>
	<div class="flex w-full pt-4 flex-col md:flex-row">
		<div class="flex w-full md:w-1/4 border border-primary">
			<ProjectsSelector {localProjects} />
		</div>
		<div class="flex flex-col w-full">
			<div class="flex pb-0 gap-0 w-full">
				{#each days as { date, day, hours }, i}
					<button onclick={() => selectDay(i)} class="flex-1">
						<div
							class="flex flex-col border border-primary cursor-pointer {i === selectedDayIndex
								? 'bg-primary border-b-primary text-white'
								: ''}"
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

			<div class="flex w-full bg-white border border-t-0 border-primary min-h-[400px]">
				<div class="flex-1">
					{#if Object.keys(groupedEntries).length > 0}
						{#each Object.entries(groupedEntries) as [projectName, projectEntries]}
							<div class="flex justify-between items-center px-4 py-2 bg-primary-600 text-white">
								<em class="italic">{projectName}</em>
								<button
									class="px-4 py-2 bg-primary text-white"
									onclick={() => addEntry(projectName)}>Add New Entry</button
								>
							</div>
							<div class="flex flex-col border-b">
								{#each projectEntries as entry, index}
									<div class="pl-8 pr-4 py-2 bg-gray-100">
										<div class="flex justify-between mb-2 items-center">
											<div class="flex space-x-2">
												<Input
													type="number"
													data-max="99"
													bind:value={entry.timeHours}
													oninput={(e) => handleInput(e, index, 'timeHours')}
													class="w-9 p-2"
												/>
												<span>:</span>
												<Input
													type="number"
													data-max="59"
													bind:value={entry.timeMinutes}
													oninput={(e) => handleInput(e, index, 'timeMinutes')}
													class="w-9 p-2"
												/>
											</div>
											<Input
												type="text"
												bind:value={entry.description}
												oninput={(e) => updateEntry(index, 'description', e.target.value)}
												class="flex-1 ml-4 p-2"
											/>
											<button
												class="ml-4 px-4 py-2 bg-red-500 text-white flex items-center justify-center"
												onclick={() => deleteEntry(index)}
											>
												<Fa icon={fasTrashAlt} />
											</button>
										</div>
									</div>
								{/each}
							</div>
						{/each}
					{:else}
						<p class="p-4">No entries.</p>
					{/if}
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
