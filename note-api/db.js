'use strict'

const fastifyPlugin = require('fastify-plugin')
var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('./note.db');

async function dbConnector(fastify, options) {
  var db = new sqlite3.Database(':memory:');

  db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS note (title VARCHAR NOT NULL, description VARCHAR, createAt DATE, isDone BOOLEAN DEFAULT false, isImportant BOOLEAN DEFAULT false, isDelete BOOLEAN DEFAULT false)");
  });

  fastify.decorate('sql', db);
  // db.close();
}

module.exports = fastifyPlugin(dbConnector);
