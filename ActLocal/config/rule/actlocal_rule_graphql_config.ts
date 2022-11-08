
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://jtanner04.hqtest.tst:8370/graphql/ActLocal/Rule",
  generates: {
    "ActLocal/src/generated/rule/actlocal_rule_graphql.ts": {
      plugins: ["typescript"]
    },
    "ActLocal/schema/rule/actlocal_app_graphql_schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
