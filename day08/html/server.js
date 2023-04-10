var http = require('http');
var fs = require('fs');

http.createServer(function (request , response) {

    fs.readFile('./CSS_media query.html',function(error , data){
        if(error){
            response.writeHead(404);
            response.write('Error 404. Page not Found.')
        }
        else{
            response.writeHead(200,{'content-type':'text/html'});
            response.write(data);
            response.end();
        }
    })

}).listen(8000);

console.log('server listening on port 8000')