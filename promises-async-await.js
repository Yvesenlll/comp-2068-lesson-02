console.clear();
//Callback

    //arrow method syntax
    //const method = () => {}

const washUp = () => console.log('Wash your hands!!');

// const callMe = name => {
//     setTimeout(() => {
//         console.log(`Time for Dinner, ${name}!!!`);
//         washUp();
//     }, 2000);
// }

const callMe = async name => {
    await new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log(`Time for Dinner, ${name}!!!`);
            return resolve();
        }, 2000);
    })
}


// setTimeout(name =>{
//     console.log('Done like dinner.');

//     callMe(name);
// },2000,"Yvesen");

// //Promises
// new Promise((resolve, reject) => {
//     setTimeout(() =>{
//        console.log("Done like Dinner");
//        resolve();  
//     },2000);
// })
// .then(callMe('Yvesen'));

//Async/Await
    // this function is similar with the main function in JAVA.
const asyncfunc = async (name) => {
    await new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log('Done like Dinner');
            return resolve();
        });
    });
    await callMe(name);
    await washUp();
};

asyncfunc('Yvesen');

(async () => {
    console.log('I\'m iffy about IFFEs')
})();