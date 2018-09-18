const readline = require("readline");
var questions = ['1? ', '2? ', '3? '];
var package = {

}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursionFunction = function () {
    rl.question('What do you think of Node.js? ', (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${answer}`);
        if(answer == 'exit'){
            rl.close();
        }else{
            recursionFunction()
        }
    });
}

recursionFunction();