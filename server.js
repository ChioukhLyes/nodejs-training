const http = require("http");
const fs = require('fs');
const url = require('url');

let server = http.createServer();

let file = 


server.on('request', (request, response) => {

    /* 
    //Get query parameters
    response.writeHead(200);
    let query = url.parse(request.url, true).query;

    if(query.name === undefined){
        response.end('Hi, anonyme');
    } else {
        response.end('Hi, hello '  +  query.name);
    }
   
    response.end(); */

    /*
    //Using input file
    fs.readFile('index.html', (err, data) => {
        if (err) {
            response.writeHead('404');
            response.end('File not found');
        } else {
            response.writeHead(200, {
            'coontent-type' : 'text/html; charset=utf-8'
            });
            response.end(data);
        }       
      });
      */


    //Write on index.html
     /*  let query = url.parse(request.url, true).query;
      let name = query.name === undefined ? 'anonyme' : query.name;

      fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            response.writeHead('404');
            response.end('File not found');
        } else {
            response.writeHead(200, {
            'coontent-type' : 'text/html; charset=utf-8'
            });

            data = data.replace('{{name}}', name);

            response.end(data);
        }       
      }); */



});


server.listen(8080);



