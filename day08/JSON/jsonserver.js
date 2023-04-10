var http = require('http');
var fs = require('fs'); 
const { json } = require('stream/consumers');

http.createServer(function (req, res) {
    
    fs.readFile("./users.json","utf-8",function (err,data) {
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.write('hello');
        // var myobj = { id: 2, name: 'Ram', age: 27 };
        data = JSON.parse(data);
        res.end(JSON.stringify(data));
    })




}).listen(5000);

console.log('Server listening on Port: 5000');
