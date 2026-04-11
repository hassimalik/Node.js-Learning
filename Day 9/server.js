const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Profiling Lab</h1><p>Visit /fast or /slow to see the difference!</p>");
});

// 1. The Fast Route (Like a Salad - takes 1 second )

app.get('/fast', (req, res)=>{
    res.send("That was fast!");
});

// 2. The Slow Route (The "Bully" - Takes a lot of CPU)
app.get('/slow',(req, res ) => {
    console.log("Starting heavy work...");

    // This is a giant loop that does nothing but waste time 
    // It's like a cook who decides to count every grain of rice 

    let count = 0;
    for (let i = 0; i < 1e9; i++){
        count++;
    }

    res.send(`Done counting to a billion! 🍚 Total: ${count}`);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"))