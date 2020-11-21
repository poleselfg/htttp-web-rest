const http = require("http");
//suelen devolver html
http
  .createServer((request, response) => {
    //metodo crea servidor, recibe dos parametros request y responde( request toma data, responde es que respondo )
    console.log(request.url); //escuchala consulta
    response.write("Hola Gente");
    response.end(); //siempre va responde.end  para que se ejecute lo declarado mas arriba
  })
  .listen(3000); //el puerto que escucha el server

console.log("escuchando puerto 3000");
