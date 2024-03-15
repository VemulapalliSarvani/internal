const http=require('http');
const hostname='127.0.0.1';
const port=3000;
const requestListener=function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    if(req.method=='POST'){
        res.end('Hello! \n You opened POST method');
    }
    if(req.method=='GET'){
        res.end("Hello! \n You opened GET method");
    }
}
const server=http.createServer(requestListener);
server.listen(port,hostname);