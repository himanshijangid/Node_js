var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {

    var content = `<h1> Welcome </h1>
                    <p>hello world</p>`;

    fs.writeFile('abc.html', content, function (err) {
        if (err) throw err;
        console.log("Data saved");
    });

    fs.readFile('abc.html',function (err,data) {
        if (err) throw err;

        res.writeHead('200', { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    })

}

).listen(8080);

console.log("Server is on");