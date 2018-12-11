# Symphony React Starter

A starter project for developing extension apps for Symphony.

## Development in a nutshell

To install dependencies run `yarn install`

To start development run `yarn dev`

## Linter

To enforce good writing practices and patterns [a linter](https://standardjs.com/) was added

To run lint `yarn lint`, it will run `standard --fix` and will try to fix any non standard js.

> Some packages (e.g. mocha) put their functions (e.g. describe, it) on the global object (poor form!). Since these functions are not defined or require'd anywhere in your code, standard will warn that you're using a variable that is not defined (usually, this rule is really useful for catching typos!). But we want to disable it for these global variables.

To fix global warning add it to the globals array on package.json 

`{
  "standard": {
    "globals": [ "myVar1", "myVar2" ]
  }
}`

## Testing

run `yarn test`
