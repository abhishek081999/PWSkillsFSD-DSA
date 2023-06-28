const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url =='/'){
     res.write('<h1>hello node js</h1>')
  } else if(req.url == '/about'){
    res.write('<h1>About Page!</h1>')
  }
  res.end();
})

server.listen(3000)
console.log(`The http server is listen on 3000`)