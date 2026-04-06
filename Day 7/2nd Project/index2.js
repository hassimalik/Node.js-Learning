import fs from "fs/promises";
import fetch from "node-fetch" 

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData(){
    try {
        console.log("Fetching data from the API..");
        const response = await fetch(API_URL);
        if(!response.ok){
            console.log("Error fetching file");
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
        await fs.writeFile("posts.json", JSON.stringify(data , null , 3))
    }
    catch(e){
        console.log("Error saving to file.", e.message)
    }
}

async function main(){
    const data  = await fetchData();
    await saveToFile(data);
}

main();