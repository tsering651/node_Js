//to initilaize the project use the command npm init
//we use http module to create a server

const http= require('http');

//to read file we require fs(file system module)
const fs=require('fs');

const port=8000;

//request handler
function requestHandler(req,res){
    console.log(req.url);
   res.writeHead(200,{'content-type':'text/html'});
  //  res.end('<h1>Gotcha! </h1>');
//   fs.readFile('./index.html',function(err,data){
//      if(err){
//         console.log("Error",err);
//         return res.end('<h1>Error</h1>');
//      }
//      return res.end(data);
//   })

   let filePath;
   switch(req.url){
      case '/':
        filePath='./index.html';
        break;
      case '/profile':
        filePath='./profile.html';
        break;
      default:
        filePath='./404.html'    
   }
   fs.readFile(filePath,function(err,data){
       if(err){
        console.log("Error ");
        return res.end('<h1>Error</h1>');
       }
       return res.end(data);
   })

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