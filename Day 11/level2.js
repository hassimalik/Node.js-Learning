const repl = require('node:repl');

// Setup our cool look 
const bCyan = '\x1b[96m';
const bGreen = '\x1b[92m';
const reset = '\x1b[0m';


console.log(bCyan + "--- WELCOME TO SMART-BOAT V2.0 ---" + reset);


// 2. Start the REPL and save it to a variable called my Boat
const myBoat = repl.start({
    prompt:bGreen + "⛵ > " + reset,
    useColors:true
});

// 3. Inject Data (Level 2 Magic)
// Now u dont have to type these in the REPL they are already there,

myBoat.context.username = "Hassaan";
myBoat.context.goal = "English Fluency";

//4. Inject a function (A SuperPower)
myBoat.context.spring = (daysDone) => {
    const total = 40;
    const remaining = total - daysDone
    console.log(`Hi ${myBoat.context.username}! You have ${remaining} days left in your english sprint.`);
}

myBoat.context.Hassaan = "That is my name! I am a Software Developer.";