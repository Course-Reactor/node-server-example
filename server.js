const express = require("express");
const server = express();

server.use(express.static("public"));

server.get("/", (request, response) => {
  response.send("Hello, world!");
});

server.get("/greeting", (request, response) => {
  const name = request.query.name;
  if (name === "") {
    response.send("Please send your name as a query param.");
  } else {
    response.send(`Hello, ${name}.`);
  }
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080.");
});
