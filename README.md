# @otklib/direct-server

## Install

```bash
$ npm install -S @otklib/direct-server
```

## Usage

```ts
// global
const server = new DirectServer()

// provider
const controller: DirectController<Input, Output> = new SomeController()
server.addHandler<Input, Output>('some-name', controller)

// client
const result: Output = await server.call<Input, Output>('some-name', input)
```

## Run tests

```bash
# unit tests
$ npm run test
```
