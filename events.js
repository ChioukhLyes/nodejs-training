const EventEmitter = require('events');
const http = require('http');

let App = {
    start: function(port){
         let myListener = new EventEmitter();
         let server = http.createServer((request, response) => {
             response.writeHead(200, {
                'coontent-type' : 'text/html; charset=utf-8'
                });
            if(request.url === '/'){
                myListener.emit('root', response);
            }
            response.end();
         }).listen(port)
         return myListener;
    }
}

let app = App.start(8080);

app.on('root', function (response) {
    response.write('Im on root');
})