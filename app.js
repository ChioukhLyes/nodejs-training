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
                console.log('ok');
                
                myListener.emit('root', response);
            }
            response.end();
         }).listen(port)
         return myListener;
    }
}

module.exports = App;