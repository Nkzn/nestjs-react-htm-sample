nestjs-react-htm-sample
==========

sample: https://nestjs-react-htm-sample.herokuapp.com/

## This sample did

* Use `Handlebars` template engine. (follow [this doc](https://docs.nestjs.com/techniques/mvc))
  - `src/main.ts`
  - `views/index.hbs`

* Non-build React with [htm](https://github.com/developit/htm).
  - `/public/js/index.js`
  - `views/index.hbs` (script with `type="module"`)
* SSR with embeded JSON data.
  - `src/app.controller.ts`
  - `views/index.hbs`

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
