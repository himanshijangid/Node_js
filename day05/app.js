    const http = require("http");
    const fs = require("fs");
const { log } = require("console");


    const server = http.createServer((request,response) => {
        console.log(request.url,request.method);

        console.log(request.url);

        const url = request.url;
        const method = request.method;
        if (url === "/"){
            
            response.write("<html>")
            response.write("<header><title>home page</title></header>");
            response.write("<body><h1>welcome to my home page</body>");
            response.write("<form action ='message' method = 'post'><input type = 'text' name = 'message'><button>send</button></form>")
            response.write("</html>");
            // response.end();
            return response.end();
        }
        if (url === '/message' &&  method === 'POST'){

            const body = [];
            request.on("data" , (chunk )=> {
                console.log(chunk);
                body.push (chunk);

            })
            request.on  ("end" , () => {
                const parseBody = Buffer.concat(body).toString()
                console.log(parseBody);
                const message = parseBody.split("=")[1];
                console.log(message);
            })



            fs.writeFileSync("message.text" , "Dummy");
            response.statusCode = 302;
            response.setHeader("location" , "/");
            return response.end();

        }
        // if (url === "/about"){
            
        //    response.write("<html>")
        //    response.write("<header><title> about</title></header>");
        //     response.write("<body><h1> about  me</body>");
           
        //    response.write("</html>");
        //     response.end();
        // }


        response.setHeader("content-type" , "text/html")
        response.write("<html>")
        response.write("<header><title>error 404</title></header>");
        response.write("<body><h1>Page no found.</body>");
        response.write("</html>");
        response.end();
    })
    server.listen(8080);      