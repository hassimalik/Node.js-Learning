console.log("I am ordering ice cream..")

function makeIceCream(callback){
    console.log("Shop guy is making ice cream.. (takes time)");
    setTimeout(()=>{
        const iceCream = "Chocolate 🍦";
        callback(iceCream);
    }, 3000);
}


function eatIceCream(readyIceCream){
    console.log("Yay! Ice cream is ready " + readyIceCream);
    console.log("Now i am eating it.");
}

makeIceCream(eatIceCream);
console.log("Meanwhile I am playing football.")