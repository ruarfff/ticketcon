const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const { createRequestHandler } = require('@remix-run/express')

let app = express()

app.use(compression())
// You may want to be more aggressive with this caching
app.use(express.static("public", { maxAge: "1h" }));

// Remix fingerprints its assets so we can cache forever
app.use(express.static("public/build", { immutable: true, maxAge: "1y" }));

app.use(morgan("tiny"));

app.all(
  "*",
  createRequestHandler({
    build: require("./build"),
    getLoadContext(req) {
      // Whatever you return here will be passed as `context` to your loaders
      // and actions.
      return { req }
    }
  })
);

module.exports = app
