const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
    jsonServer.rewriter({
        "/*": "/$1",
    })
);
server.use(router);

server.listen(5000, () => {
    console.log("Json Server is tunning");
});

module.exports = server;