const http = require('http');
const HOSTNAME = 'localhost'
const PORT= 3030
const server = http.createServer((req,res)=>{
    // Home Page
     //About Page
     //Contact Page
     //Product Page
     //Rest... >Error

     if(req.url == '/'){
        res.statusCode =200;
        res.setHeader('Content-Type','text/plain') 
        res.end('Welcome to Node js ...Abhishek!');
     }else if(req.url == '/about'){
        res.statusCode =200;
        res.setHeader('Content-Type','text/plain') 
        res.end('About Page!...');
     }else if(req.url == '/contact'){
        res.statusCode =200;
        res.setHeader('Content-Type','text/plain') 
        res.end('Contact Page!...');
     }else if(req.url == '/product'){
        const http = require('http');

const options={
      hostname:'fakestoreapi.com',
      path:'/products/1',
      method:'GET'
}

const apiReq = http.request(options,(apiRes)=>{
apiRes.on('data',(data)=>{
    console.log(data.toString());
    res.statusCode =200;
    res.setHeader('Content-Type','application/json') 
    res.end(JSON.stringify(data));

})
});

apiReq.on('error',() =>{
    console.log(e)
})

apiReq.end();
       
     }else{
        res.statusCode =500;
        res.setHeader('Content-Type','text/plain') 
        res.end('Error!...');
     }

    //res.statusCode =200;
    // res.setHeader('Content-Type','text/plain') 
    // res.setHeader('Content-Type','application/json') 
    // res.end(JSON.stringify({
    //     error:"Server Error!"
    // }))
    // res.end('Node server created by Abhishek kumar!') 
    //res.end(JSON.stringify({ productName:'Server Error!'}));
})

server.listen(PORT,()=>{
  console.log(`Server running at ${HOSTNAME}:${PORT}`);  
})