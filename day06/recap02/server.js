var http = require('http');
var evaluate = require('./evaluate');
var custom = require('./custom');
var module3 = require('./module3');




function onrequest(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Welcome to Node.js Server.');
    response.write('\n' +evaluate.sum(2,4));
    response.write('\n' +evaluate.sub(12,4));
    response.write('\n' +evaluate.mul(2,4));
    response.write('\n' +evaluate.div(10,4));
    response.write('\n' +evaluate.str);
    response.write('\n' + custom.dt());
    response.write('\n' + custom.mystr01);
    response.write('\n' + custom.mystr02);
    response.write('\n' + module3.myFunction());
    response.end();
}







http.createServer(onrequest).listen(5050);
console.log('server Created....');