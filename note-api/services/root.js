'use strict'

module.exports = function (fastify, opts, next) {

  const select = "rowid AS id, title, description, createAt as date, isDone, isImportant, isDelete";

  const parseDateFormat = function (timestamp) {
    const date = new Date(timestamp);
    const day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    const month = (date.getMonth() < 10 ? "0" : "") + date.getMonth();
    return `${day}/${month}/${date.getFullYear()}`;
  }
  const parseRow = function (row) {
    return {
      ...row,
      isDone: !!row.isDone,
      isImportant: !!row.isImportant,
      isDelete: !!row.isDelete,
      date: parseDateFormat(row.date),
    }
  }

  fastify.get('/notes', function (request, reply) {
    const { sql } = fastify;
    sql.all(`SELECT ${select} FROM note WHERE isDelete = false ORDER BY createAt DESC`, function (_, rows) {
      reply.send(rows.map((row) => parseRow(row)))
    });
  });

  fastify.post('/notes', function (request, reply) {
    const { sql } = fastify;
    const { title, description, isDone, isImportant } = request.body;
    if (!title) {
      reply.code(400).send({ message: "Please add title" });
      return;
    }
    const createAt = new Date();
    sql.run("INSERT INTO note VALUES (?, ?, ?, ?, ?, ?)", [title, description, createAt, isDone, isImportant, false], function () {
      sql.get(`SELECT ${select} FROM note WHERE rowid = ?`, this.lastID, (err, row) => {
        reply.send(parseRow(row))
      })
    });
  });

  fastify.delete('/notes/:id', function (request, reply) {
    const { sql } = fastify;
    const { id } = request.params;
    sql.run("UPDATE note SET isDelete = true WHERE rowid = ?", [id], function () {
      reply.send({ id: parseInt(id) });
    })
  });

  fastify.patch('/notes/:id/done', function (request, reply) {
    const { sql } = fastify;
    const { id } = request.params;
    const { isDone } = request.body;
    sql.run("UPDATE note SET isDone = ? WHERE rowid = ?", [isDone, id], function () {
      sql.get(`SELECT ${select} FROM note WHERE rowid = ?`, this.lastID, (err, row) => {
        reply.send(parseRow(row))
      })
    })
  })

  fastify.put('/notes/:id', function (request, reply) {
    const { sql } = fastify;
    const { id } = request.params;
    const { title, description, isDone, isImportant } = request.body;
    if (!title) {
      reply.code(400).send({ message: "Please add title" });
      return;
    }
    sql.run("UPDATE note SET title = ?, description = ?, isDone = ?, isImportant = ? WHERE rowid = ?", [title, description, isDone, isImportant, id], function () {
      sql.get(`SELECT ${select} FROM note WHERE rowid = ?`, id, (err, row) => {
        reply.send(parseRow(row))
      })
    })
  });

  fastify.get('/notes/:id', function (request, reply) {
    const { sql } = fastify;
    const { id } = request.params;
    sql.get(`SELECT ${select} FROM note WHERE rowid = ?`, id, (err, row) => {
      reply.send(parseRow(row))
    })
  })

  next()
}

