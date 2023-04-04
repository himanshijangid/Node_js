// const http = require("http");

// function rqListener(request,response){
    
// }
// http.createServer(rqListener);


const http = require("http")

const server = http.createServer((request,Response) => {
    console.log("welcome to my world");
})

server.listen(3000)

