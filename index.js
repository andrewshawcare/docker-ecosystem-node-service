const http = require("http");
const pg = require("pg");
const hostname = "127.0.0.1";
const port = 5678;

http.createServer((request, response) => {
  pg.connect("postgres://postgres:@database/postgres", (error, client, done) => {
    if (error) {
      done();
      console.log(error);
      response.writeHead(500);
      response.end();
    } else {
      client.query("select id, name from person", (error, result) => {
        done();
        response.writeHead(200, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Method": "*",
          "Access-Control-Allow-Headers": "*"
        });

        response.end(JSON.stringify(result.rows));
      });
    }
  });
}).listen(port, hostname, () => {
  console.log(`Server listening at http://${hostname}:${port}`);
});
