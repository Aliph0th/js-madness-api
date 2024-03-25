# JS Madness API

This repository contains a Node.js Express API that generates code like `({}+[])[-+!+[]]+(![]+[])[-+[]]+(!![]+[])[+!+[]]`

## Play with it

https://aliph0th.github.io/js-madness/ - site
http://5.188.88.195 - api url

## Installation

1. Clone:
   ```
   https://github.com/Aliph0th/js-madness-api.git
   ```
2. Navigate to the project directory:

   ```
   cd js-madness-api
   ```

3. Install the dependencies:

   ```
   yarn install
   ```

4. Start server (develop mode):

   ```
   yarn run dev
   ```

   or for production

   ```
   yarn run start
   ```

   The server will start running on `http://localhost:3000`.

## Usage

### Encode

To generate encoded string, make a `POST` request to the `/sequence` endpoint.

#### Params:

-  `payload` - `number` or _not empty_ `string`. Available symbols: `␣-0123456789ABEFINORSabcdefgijlmnoprstuvxy{}()[]`
-  `allow` - `boolean`. Sets whether missing characters can be processed as `...+'<missing symbols sequence>'+...`. If `false` missing symbols will be ignored.

```
curl -X POST -H "Content-Type: application/json" -d '{"payload": "2"}' http://localhost:3000/sequence
```

#### Responses

-  `400` - You have sent invalid data (see `errors` property of response)
-  `200` - Everything is ok. Response will look like `{ "encoded": "..." }`

### Decode

To evaluate an encoded line into a normal string, make a `GET` request to the `/sequence`.

#### Params

-  `payload` - encoded string.

```
curl -X GET -H "Content-Type: application/json" -d '{"payload": "(-~+!+[])"}' http://localhost:3000/sequence
```

#### Responses

-  `418` - You have sent forbidden words (see `errors` property of response)
-  `200` - Everything is ok if response looks like `{ "decoded": "..." }`
-  `200` - but response looks like `{ "evaluationError": "..." }`. This means that `payload` string contains evaluation errors (undefined variable or unexpected end of input...)

## Contributing

Contributions to this repository are welcome. If you find any issues or would find a way to get new symbols, feel free to create a pull request.
