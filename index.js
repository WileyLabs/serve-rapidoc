#!/usr/bin/env node

/**
 * @copyright 2020 John Wiley & Sons, Inc.
 * @license MIT
 **/

const fs = require('fs');
const path = require('path');

const express = require('express')
const app = express()
app.set('view engine', 'mustache');

const argv = require('yargs')
  .scriptName('serve-rapidoc')
  .usage('$0 [directory] [args]', 'Serve RapiDoc', (yargs) => {
    yargs.positional('directory', {
      describe: 'A directory from which to serve spec files',
      type: 'string',
      default: process.cwd()
    })
  })
  .options({
    'p': {
      alias: 'port',
      describe: 'Port number to serve on',
      type: 'number',
      default: 3000
    }
  })
  .help()
  .argv;

// Local override version of the rapidoc index.html doc
app.use(express.static(path.join(__dirname, 'public/')))

app.use(express.static(path.join(__dirname, 'node_modules/rapidoc/dist/')))

app.use(express.static(argv.directory))

app.listen(argv.port)

process.on('SIGINT', function() {
  process.exit();
})

console.info(`Visit http://localhost:${argv.port}/`);
console.info(`Serving spec files from ${argv.directory}\n`);

fs.readdir(argv.directory, (err, files) => {
  if (err) console.error(err);
  files.forEach((file) => {
    if (path.extname(file) === '.yaml') {
      console.info(`    http://localhost:${argv.port}/#spec-url=${file}`);
    }
  });
});
