<script context="module" lang="ts">
	import { getClient as graphqlClient } from '$lib/graphql-client';
	import {
		GetProjectsDocument,
		CreateProjectDocument,
		UpdateProjectDocument
	} from '$lib/gql/generated/graphql';
	import type {
		Project,
		CreateProjectMutation,
		UpdateProjectMutation,
		GetProjectsQuery
	} from '$lib/gql/generated/graphql';
	import { updateItemInList, replaceArrayContent, addItemToList } from '$lib/utils';
	import { safeExecute } from '$lib/utils.ts';

	let projects = $state<Project[]>([]);

	export async function fetchProjects() {
		safeExecute(async () => {
			const response = await graphqlClient().request<GetProjectsQuery>(GetProjectsDocument);
			replaceArrayContent(projects, response.projects);
		});
	}

	export async function updateProject(updatedProject: Project) {
		safeExecute(async () => {
			await graphqlClient().request<UpdateProjectMutation>(UpdateProjectDocument, {
				...updatedProject
			});
			updateItemInList(projects, updatedProject);
		});
	}

	export async function createProject(
		newProjectName: String,
		clientId: Number,
		publicProject: Boolean
	) {
		safeExecute(async () => {
			const response = await graphqlClient().request<CreateProjectMutation>(CreateProjectDocument, {
				name: newProjectName,
				clientId: clientId,
				public: publicProject
			});
			addItemToList(projects, response.createProject);
		});
	}

	export function getProjects() {
		return projects;
	}
</script>
