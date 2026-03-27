const fs = require('fs');

const command = process.argv[2];

if(!command){
    console.log('Usage: node file-manager.js list');
    console.log();
    process.exit();
}

if (command === "list"){
    const files = fs.readdirSync('.');
    console.log("📁 Files and folders in current directory: ");
    if (files.length === 0){
        console.log("       (Folder is empty)");
    } else {
        files.forEach(file=>{
            console.log("    - " + file);
        });
    }
} else {
    console.log("Unknown command! Use: list");
}