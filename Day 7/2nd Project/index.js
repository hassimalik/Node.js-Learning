import fs from "fs/promises";
import fetch from "node-fetch";

// API URL 
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Fetching Data Function 
async function fetchData(){
    try {
        console.log("Fetching data from API...");
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`)
        }
        return await response.json();
    } catch (error) {
        console.log("Error fetching users", error.message);
        throw error;
    }
}

async function saveToFile(data){
    try{
        console.log("Saving data to file");
        await fs.writeFile("data.json", JSON.stringify(data, null, 2));
    } catch (error) {
        console.log("Error saving to file", error.message);
        throw error;
    }
}

async function main(){
    const data = await fetchData();
    await saveToFile(data);
}

main();