console.clear();
//Blcoking (sync)
const sayHi = name => console.log(`Hello, ${name}`);

// function sayHi(name){
//     console.log("Hello, " + name);
// }
sayHi('1');
sayHi('2');
sayHi('3');

//Non-blocking(async)
setTimeout(sayHi, 2500, "4");
setTimeout(sayHi, 3500, "5");
setTimeout(sayHi, 1500, "6");
sayHi("7");


//Call back
const farewell = name => console.log(`Goodbye, ${name}`);
const greeting =(name, callback) =>{
    console.log(`Hello, ${name}`);
    
    callback(name);
}
greeting("8", farewell);