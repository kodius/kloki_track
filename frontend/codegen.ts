import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/api/graphiql",
  documents: "src/lib/gql/**/*.graphql",
  generates: {
    "src/lib/gql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
}

export default config
