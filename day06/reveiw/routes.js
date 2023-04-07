
const fs = require("fs");

// function requestHandler (req,res){

// }

const requestHandler =(request,response) => {
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
            // console.log(chunk);
            body.push (chunk);

        })
        request.on  ("end" , () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody);
            const message = parsedBody.split("=")[1];
            console.log(message);

            fs.writeFileSync("message.text" , message ,error => {
            response.statusCode = 302;
            response.setHeader("location" , "/");
            return response.end();
        })
    })


       
   

    }


    response.setHeader("content-type" , "text/html")
    response.write("<html>")
    response.write("<header><title>error 404</title></header>");
    response.write("<body><h1>Page no found.</body>");
    response.write("</html>");
    response.end();
}

// module.exports = {
//     handler : requestHandler,
//     someText : "hello world..."
// }

exports.handler = requestHandler;
exports.someText = "some text pass "