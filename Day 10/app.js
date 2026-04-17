// 1. IMPORTING MODULES (Practical: Using built-in tools)
const fs = require('fs');
const http = require('http');

// 2. FILE SYSTEM (Practical: Writing data to your computer)
const myNote = process.argv[2] || "Now i am learning the node scripts!.";

fs.appendFileSync('notes.txt', `${myNote}\n`);
console.log('✅ Note saved to notes.txt');

// 3. THE SERVER (Practical: Turning your PC into a web host)
const server = http.createServer((req, res) => {
    // Read the file we just wrote to
    const data = fs.readFileSync('notes.txt', 'utf8');
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>My Digital Notes</h1><pre>${data}</pre>`);
    res.end();
});

// Start the server
server.listen(3000, () => {
    console.log('🚀 Server running at http://localhost:3000');
    console.log('Press Ctrl+C to stop.');
});