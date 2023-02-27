const data = require("./db.ts")

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3333;

server.use(middlewares);
server.use(router);

server.listen(port);
