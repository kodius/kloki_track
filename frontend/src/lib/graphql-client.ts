// src/lib/graphql-client.ts
import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:4000/api/graphql';

export const client = new GraphQLClient(endpoint, {
  headers: {
    // Add any headers if needed, e.g., authorization
  },
});
