const repl = require('node:repl');


console.log('--- WELCOME TO THE SEAS --- \nSetting sail now...');
const myTerminal = repl.start('⛵ Mini Boat > ');


myTerminal.on('exit', () => {
    console.log('\n closing MiniBoat.. See you next time! 😊');
    process.exit();
})