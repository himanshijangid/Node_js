var http = require('http');
var fs = require('fs');
var port = 5050;

http.createServer(function (request, response) {

    
    // Write Stream
    var dataContent = "this content is save in xyz text file";

var writer = fs.createWriteStream('abc.txt');
writer.write(dataContent, 'utf-8');
writer.end();
writer.on('finish',function () {
    console.log('Writing completed...');
}).on('error',function (err) {
    console.log(err);
})
    
    var pipeReader = fs.createReadStream('abc.txt');
    var pipeWriter = fs.createWriteStream('xyz.txt');
    
    pipeReader.pipe(pipeWriter);
    
    pipeWriter.on('finish',function () {
        // reading Stream
        var content = '';
        var reader = fs.createReadStream('xyz.txt');
        reader.setEncoding('UTF-8');
        reader.on('error', function (error) {
            console.log(error);
        }).on('data', function (chunk) {
            content += chunk;
        }).on('end', function () {
            response.on('error', function (err) {
                console.log(err)
            });
            response.setHeader('200', { 'Content-Type': 'plain/text' })
            response.write(content);
            response.end();
        })  
    })
    
   
    }

).listen(port);

console.log(`Server is listening on Port: ${port}`);