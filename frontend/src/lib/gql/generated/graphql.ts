/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Client = {
  __typename?: 'Client';
  archived?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  projects?: Maybe<Array<Maybe<Project>>>;
};

export type CreateSessionInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type Project = {
  __typename?: 'Project';
  archived?: Maybe<Scalars['Boolean']['output']>;
  client?: Maybe<Client>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  public?: Maybe<Scalars['Boolean']['output']>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  archiveClient?: Maybe<Client>;
  archiveProject?: Maybe<Project>;
  createClient?: Maybe<Client>;
  createProject?: Maybe<Project>;
  updateClient?: Maybe<Client>;
  updateProject?: Maybe<Project>;
};


export type RootMutationTypeArchiveClientArgs = {
  archived: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type RootMutationTypeArchiveProjectArgs = {
  archived: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type RootMutationTypeCreateClientArgs = {
  name: Scalars['String']['input'];
};


export type RootMutationTypeCreateProjectArgs = {
  clientId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  public?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RootMutationTypeUpdateClientArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type RootMutationTypeUpdateProjectArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  clients?: Maybe<Array<Maybe<Client>>>;
  /** Autorizacija za prvu ruku da se moze generirati token iz elixira */
  createSession?: Maybe<Session>;
  me?: Maybe<User>;
  projects?: Maybe<Array<Maybe<Project>>>;
};


export type RootQueryTypeCreateSessionArgs = {
  input?: InputMaybe<CreateSessionInput>;
};

export type Session = {
  __typename?: 'Session';
  token?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  clients?: Maybe<Array<Maybe<Client>>>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  projects?: Maybe<Array<Maybe<Project>>>;
};

export type GetClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClientsQuery = { __typename?: 'RootQueryType', clients?: Array<{ __typename?: 'Client', id: string, name?: string | null } | null> | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'RootQueryType', me?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null };

export type UpdateClientMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateClientMutation = { __typename?: 'RootMutationType', updateClient?: { __typename?: 'Client', id: string, name?: string | null } | null };

export type CreateClientMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateClientMutation = { __typename?: 'RootMutationType', createClient?: { __typename?: 'Client', id: string, name?: string | null, archived?: boolean | null } | null };

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { __typename?: 'RootQueryType', projects?: Array<{ __typename?: 'Project', id: string, name?: string | null, archived?: boolean | null, public?: boolean | null, client?: { __typename?: 'Client', name?: string | null } | null } | null> | null };

export type UpdateProjectMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateProjectMutation = { __typename?: 'RootMutationType', updateProject?: { __typename?: 'Project', id: string, name?: string | null, public?: boolean | null, archived?: boolean | null } | null };

export type CreateProjectMutationVariables = Exact<{
  clientId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  public?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CreateProjectMutation = { __typename?: 'RootMutationType', createProject?: { __typename?: 'Project', id: string, name?: string | null, archived?: boolean | null, public?: boolean | null, client?: { __typename?: 'Client', name?: string | null } | null } | null };


export const GetClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getClients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetClientsQuery, GetClientsQueryVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const UpdateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateClientMutation, UpdateClientMutationVariables>;
export const CreateClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"archived"}}]}}]}}]} as unknown as DocumentNode<CreateClientMutation, CreateClientMutationVariables>;
export const GetProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"archived"}},{"kind":"Field","name":{"kind":"Name","value":"public"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectsQuery, GetProjectsQueryVariables>;
export const UpdateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"archived"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"public"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"archived"},"value":{"kind":"Variable","name":{"kind":"Name","value":"archived"}}},{"kind":"Argument","name":{"kind":"Name","value":"public"},"value":{"kind":"Variable","name":{"kind":"Name","value":"public"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"public"}},{"kind":"Field","name":{"kind":"Name","value":"archived"}}]}}]}}]} as unknown as DocumentNode<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"public"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"clientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"public"},"value":{"kind":"Variable","name":{"kind":"Name","value":"public"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"archived"}},{"kind":"Field","name":{"kind":"Name","value":"public"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;
