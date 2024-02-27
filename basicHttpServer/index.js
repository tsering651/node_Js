//to initilaize the project use the command npm init
//we use http module to create a server

const http= require('http');
const port=8000;

//request handler
function requestHandler(req,res){
    console.log(req.url);
   res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>Gotcha! </h1>');
}

//localhost <-----> 127.0.0.1
const server=http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running at port ",port);
})