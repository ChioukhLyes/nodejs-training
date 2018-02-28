let _ = require("lodash");

//or using just map
let map = require("lodash/map");


let app = require('./app').start(8080);

console.log(_.map([1 , 2, 3], function (n) {
    return n*3;    
}));

//Second solution
console.log(map([1 , 2, 3], function (n) {
    return n+3;    
}));

app.on('root', function (response) {
    response.write('Im on root');
})

//server.on('request', (request, response) => {

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
//});



