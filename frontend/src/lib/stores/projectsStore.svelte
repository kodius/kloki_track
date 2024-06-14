<script context="module" lang="ts">
	import { createClient as graphqlClient } from '$lib/graphql-client';
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

	let projects = $state<Project[]>([]);

	export async function fetchProjects() {
		const response = await graphqlClient().request<GetProjectsQuery>(GetProjectsDocument);
		replaceArrayContent(projects, response.projects);
	}

	export async function updateProject(updatedProject: Project) {
		await graphqlClient().request<UpdateProjectMutation>(UpdateProjectDocument, {
			...updatedProject
		});
		updateItemInList(projects, updatedProject);
	}

	export async function createProject(
		newProjectName: String,
		clientId: Number,
		publicProject: Boolean
	) {
		const response = await graphqlClient().request<CreateProjectMutation>(
			CreateProjectDocument,
			{ name: newProjectName, clientId: clientId, public: publicProject }
		);
		addItemToList(projects, response.createProject);
	}

	export function getProjects() {
		return projects;
	}

	fetchProjects();
</script>
