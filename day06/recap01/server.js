var http = require('http');

// http.createServer(function (req,res){
//     res.writeHead(200,{'content-type ' :'text/plain'})
//     res.write("welcome to node js server");
//     res.end()
// }).listen(5050);


function onrequest(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Welcome to Node.js Server.');
    response.end();
}

http.createServer(onrequest).listen(5050);
console.log('server Created....');