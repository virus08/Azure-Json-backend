// server.js
const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
