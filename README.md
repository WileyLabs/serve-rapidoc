# Serve RapiDoc

This little command line tool allows you to serve the current directory's
contents (which are presumably Swagger or OpenAPI docs in either YAML or JSON)
alongside [RapiDoc](https://mrin9.github.io/RapiDoc/).

You can use the location bar in the app next to the "Explore" button and input
the name of a local file (i.e. `api.yaml`) to load that file (via it's relative
localhost URL) into RapiDoc.

## Usage

```
$ npm i -g serve-rapidoc
$ serve-rapidoc
```

Or if you need a custom directory and/or port number:
```
serve-rapidoc api/ -p 2020
```

## License

MIT
