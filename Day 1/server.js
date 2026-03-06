const { createServer} = require('node:http');

const hostname = '127.0.0.1'

const port = 5000;
const server = createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    // Inside createServer callback
console.log(someUndefinedVar);  // ← this throws ReferenceError
    res.end('Hello World');
});

server.listen(port , hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})