const http= require('http');
const homeroutes = require('./routes/home')
 

const server = http.createServer((request,response)=>{
    if(request.url == '/'){
        homeroutes(request, response);
        
    } 
})

server.listen(5000)