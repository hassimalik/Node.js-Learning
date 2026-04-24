// We grab the http toolbox
const http = require('node:http');

// 2. We create the server (The Restaurant)
// 'request' is what the customer asks for
// 'response' is the tray u use to serve them

const server = http.createServer((request, response)=>{
    const myUrl = request.url;
    const myMethod = request.method
    //Create an empty bucket to catch the data pieces
    let body = []
    // Listen for 'data' events (a piece of the box arrives.)
    request.on('data', (chunk)=>{
        body.push(chunk);
        console.log("Got a chunk of data!")
    })

    //3. Listen for the 'end event (the box is finished)
    request.on('end', ()=>{
        body = Buffer.concat(body).toString();
        console.log(`Request Finished! Method: ${myMethod} | Body ${body}`);

        if(myUrl === '/'){
            response.end("Welcome to the HomePage");
        } else if(myUrl === '/echo') {
            response.end(`You sent me: ${body}`);
        } else {
            response.end("Page not found");
        }
    })
});

// 3. We tell the server to stay open on port 8000

server.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})

