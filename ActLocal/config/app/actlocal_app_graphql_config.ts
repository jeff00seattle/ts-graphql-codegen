
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://jtanner04.hqtest.tst:8370/graphql/ActLocal/App",
  generates: {
    "ActLocal/src/generated/app/actlocal_app_graphql.ts": {
      plugins: ["typescript"]
    },
    "ActLocal/schema/app/actlocal_app_graphql_schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
