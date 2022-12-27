const http=require('http');
const server=http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('welcome to our page') 
    }
    else if(req.url=='/about'){
        res.end('The is all about our company')
    }
    res.end(`<h1>Oops!</h1>
             <p>We cannot find the page</p>
             <a href="/"> back home</a>`)
    
})
server.listen(5100);


