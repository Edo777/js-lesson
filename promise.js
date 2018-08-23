let number = Math.random()*10;
let number2;

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        number2 = 5;
        resolve();
    }, number);
})

promise.then(() => {
    console.log(number2)
});

console.log("----------------------")
