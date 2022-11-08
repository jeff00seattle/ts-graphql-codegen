# ts-graphql-codegen
Generate TypeScript Definitions for GraphQL Queries with Apollo Codegen


```console
$ get-graphql-schema http://jtanner04.hqtest.tst:8370/graphql/ActLocal/App > app.graphql

$ get-graphql-schema http://jtanner04.hqtest.tst:8370/graphql/ActLocal/App --json > app_graphql.json
```


```console
$ nvm use 14.17.0

$ npx graphql-codegen init

    Welcome to GraphQL Code Generator!
    Answer few questions and we will setup everything for you.

? What type of application are you building? Application built with other framework or vanilla JS
? Where is your schema?: (path or url) http://jtanner04.hqtest.tst:8370/graphql/ActLocal/App
? Pick plugins: TypeScript (required by other typescript plugins)
? Where to write the output: ActLocal/src/generated/app/actlocal_app_graphql.ts
? Do you want to generate an introspection file? Yes
? How to name the config file? ActLocal/config/app/actlocal_app_graphql_config.ts
? What script in package.json should run the codegen? codegen:actlocal:app
Fetching latest versions of selected plugins...

    Config file generated at ActLocal/config/app/actlocal_app_graphql_config.ts

      $ npm install

    To install the plugins.

      $ npm run codegen:actlocal:app

    To run GraphQL Code Generator.
    
$ npm install
$ npm run codegen:actlocal:app

> ts-graphql-codegen@1.0.0 codegen:actlocal:app
> graphql-codegen --config ActLocal/config/app/actlocal_app_graphql_config.ts

✔ Parse Configuration
✔ Generate outputs


```
