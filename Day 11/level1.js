const repl = require('node:repl');

// Bright Color Library
const bGreen = '\x1b[92m';
const bYellow = '\x1b[93m';
const bMagenta = '\x1b[95m';
const bCyan = '\x1b[96m';
const reset = '\x1b[0m';
const bold = '\x1b[1m'; // Number 1 makes text BOLD!

console.clear();
console.log(bold + bCyan + "╔════════════════════════════════════════╗" + reset);
console.log(bold + bCyan + "║" + bYellow + "   ⭐ JESAR AL AHLAM - DEV TERMINAL  " + bCyan + "  ║" + reset);
console.log(bold + bCyan + "╚════════════════════════════════════════╝" + reset);

console.log(bMagenta + "» Status: " + bGreen + "READY" + reset);

repl.start({
    prompt: bCyan + "Jesar" + bYellow + "⚡" + reset + " ",
    useColors: true
});