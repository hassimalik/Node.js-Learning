const repl = require('node:repl');
const os = require('node:os');

const bCyan = '\x1b[96m';
const bMagenta = '\x1b[95m';
const reset = '\x1b[0m';


console.clear();
console.log(bMagenta + "--- ⚡ Specs system command v3.0 ---" + reset);


const myBoat = repl.start({
    prompt: bCyan + "system-root > " + reset
});


// Level 3: The pulse superpower

myBoat.context.pulse = () =>{
    const totalRam = (os.totalmem() /1024 / 1024 / 1024 .toFixed(2))
    const freeRam = (os.freemem() /1024 / 1024 / 1024 .toFixed(2))
    console.log(`\n${bCyan}Hello Hassaan! System is ready. Type ${bMagenta}pulse()${bCyan} to see your PC stats.${reset}`);
    console.log(`\n🖥️  Computer: ${os.hostname()}`);
    console.log(`🔋 Memory: ${freeRam} GB free / ${totalRam} GB total`);
    console.log(`⏰ Up-time: ${(os.uptime() /3600).toFixed(1)}  hours\n`);
}