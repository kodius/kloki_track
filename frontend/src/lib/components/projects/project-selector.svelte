<script>
    import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
    import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
    import { faPlusCircle as fasPlusCircle } from '@fortawesome/free-solid-svg-icons';
    import { Fa } from 'svelte-fa';

    const { localProjects } = $props();

    function addEntryToProject(projectId) {
        // Functionality to add an entry to a project
        console.log(`Adding entry to project ID: ${projectId}`);
    }
</script>

<div class="min-w-full">
    <div
        class="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
        Projects
    </div>
    <div>
        {#each localProjects as project}
            <div class="flex items-center justify-between bg-white border-b px-6 py-4">
                <div class="flex items-center text-sm font-medium text-gray-900">
                    <button
                        class="mr-2 text-green-500 hover:text-green-700"
                        on:click={() => addEntryToProject(project.id)}
                    >
                        <Fa icon={fasPlusCircle} class="text-2xl"/>
                    </button>
                    {project.name}
                </div>
                <div class="text-xl font-medium text-gray-900">
                    {#if project.isFavorite}
                        <Fa icon={fasStar} class="text-yellow-500" />
                    {:else}
                        <Fa icon={farStar} class="text-gray-400" />
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>
