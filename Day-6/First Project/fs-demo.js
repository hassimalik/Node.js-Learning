const fs = require('fs')

console.log("=== File System Demo Started ===/n");

// Create a file
fs.writeFileSync('myfile.txt', 'Hello Hassaan! You just created your first node js automation script. ');
console.log("1. File myfile.txt created successfully")

// Read File
const data  = fs.readFileSync('myfile.txt', 'utf8');
console.log("2. File content");
console.log(data);

// Delete a file

// fs.unlinkSync('myfile.txt')
// console.log("3. File deleted successfully ");

// Create a folder
fs.mkdirSync('myFolder', {recursive:true});
console.log("4. Folder is created successfully");

// List all the files and folders
const files = fs.readdirSync('.');
console.log("\n 5. Files and folders in current directory:")
files.forEach(file=>{
    console.log("   🗃️ " + file);
})

console.log("\n==== Demo Finished Successfully");