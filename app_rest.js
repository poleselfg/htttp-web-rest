const http = require("http");
//interactua con jsons

http
  .createServer((request, response) => {
    let products = {
      id: 1,
      name: "item 1",
    };

    response.writeHead(200, { "Content-Type": "application/json" }); //rest debe devolver la cabecera (STATUS CODE{TIPO DE CONTENIDO})
    response.write(JSON.stringify(product));
    response.end;
  })
  .listen(3000);

console.log("Rest in port 3000");
