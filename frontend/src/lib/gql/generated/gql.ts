/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query getClients {\n  clients {\n    id\n    name\n  }\n}\n\nquery getMe {\n  me {\n    id\n    firstName\n    lastName\n  }\n}\n\nmutation updateClient($id: ID!, $name: String) {\n  updateClient(id: $id, name: $name) {\n    id\n    name\n  }\n}\n\nmutation createClient($name: String!) {\n  createClient(name: $name) {\n    id\n    name\n    archived\n  }\n}\n\nquery getProjects {\n  projects {\n    id\n    name\n    archived\n    public\n    client {\n      name\n    }\n  }\n}\n\nmutation updateProject($id: ID!, $name: String, $archived: Boolean, $public: Boolean) {\n  updateProject(id: $id, name: $name, archived: $archived, public: $public) {\n    id\n    name\n    public\n    archived\n  }\n}\n\nmutation createProject($clientId: ID!, $name: String!, $public: Boolean) {\n  createProject(clientId: $clientId, name: $name, public: $public) {\n    id\n    name\n    archived\n    public\n    client {\n      name\n    }\n  }\n}": types.GetClientsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getClients {\n  clients {\n    id\n    name\n  }\n}\n\nquery getMe {\n  me {\n    id\n    firstName\n    lastName\n  }\n}\n\nmutation updateClient($id: ID!, $name: String) {\n  updateClient(id: $id, name: $name) {\n    id\n    name\n  }\n}\n\nmutation createClient($name: String!) {\n  createClient(name: $name) {\n    id\n    name\n    archived\n  }\n}\n\nquery getProjects {\n  projects {\n    id\n    name\n    archived\n    public\n    client {\n      name\n    }\n  }\n}\n\nmutation updateProject($id: ID!, $name: String, $archived: Boolean, $public: Boolean) {\n  updateProject(id: $id, name: $name, archived: $archived, public: $public) {\n    id\n    name\n    public\n    archived\n  }\n}\n\nmutation createProject($clientId: ID!, $name: String!, $public: Boolean) {\n  createProject(clientId: $clientId, name: $name, public: $public) {\n    id\n    name\n    archived\n    public\n    client {\n      name\n    }\n  }\n}"): (typeof documents)["query getClients {\n  clients {\n    id\n    name\n  }\n}\n\nquery getMe {\n  me {\n    id\n    firstName\n    lastName\n  }\n}\n\nmutation updateClient($id: ID!, $name: String) {\n  updateClient(id: $id, name: $name) {\n    id\n    name\n  }\n}\n\nmutation createClient($name: String!) {\n  createClient(name: $name) {\n    id\n    name\n    archived\n  }\n}\n\nquery getProjects {\n  projects {\n    id\n    name\n    archived\n    public\n    client {\n      name\n    }\n  }\n}\n\nmutation updateProject($id: ID!, $name: String, $archived: Boolean, $public: Boolean) {\n  updateProject(id: $id, name: $name, archived: $archived, public: $public) {\n    id\n    name\n    public\n    archived\n  }\n}\n\nmutation createProject($clientId: ID!, $name: String!, $public: Boolean) {\n  createProject(clientId: $clientId, name: $name, public: $public) {\n    id\n    name\n    archived\n    public\n    client {\n      name\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;