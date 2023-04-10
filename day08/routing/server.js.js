var http = require('http');
var fs = require('fs');
var url = require('url')

http.createServer(function(req,res){
    var path = url.parse(req.url).pathname
    switch (path){
        case'/' :
        renderHTML('./index.html ',res);

        case'/aboutus' :
        renderHTML('./about.html ',res);

        case'/services' :
        renderHTML('./services.html ',res);

        case'/conactus' :
        renderHTML('./contactus.html ',res);

        case'/login' :
        renderHTML('./login.html ',res);

        case'/signup' :
        renderHTML('./signup.html ',res);
        break;

        default:
            res.writeHead(404);
            res.write('Error 404. Page Not Found');
            res.end();

    }

}).listen(3000);
console.log('server is listening on post 3000');

function renderHTML (path,res){
    fs.readFile(path ,'utf-8' , function(error ,data){
        if(error){
            res.writeHead(404);
            res.write('file is not found');

        }
        else {
            res.writeHead(200, {'content-type' : 'text/html'});
            res.write(data);

        }
        res.end();
    })
}