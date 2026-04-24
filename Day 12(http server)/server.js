// We grab the http toolbox
const http = require('node:http');

// 2. We create the server (The Restaurant)
// 'request' is what the customer asks for
// 'response' is the tray u use to serve them

const server = http.createServer((request, response)=>{
    console.log("Someone just knocked on the door!");
    // This tells the customer 'Order recieved' and closes the door
    response.end("Hello! You reached my server.")
});

// 3. We tell the server to stay open on port 8000

server.listen(8080, ()=>{
    console.log("Restaurant is OPEN on http://localhost:8080");
})