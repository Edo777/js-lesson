class Human {
    eat() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("1")
                resolve([1,2,3,4,5,6])
            }, 1000);
        })
    };
    wash() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("2")
                resolve("wash");
            }, 2000);
        })
    };
    watchTv() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("3")
                resolve("watch tv")
            }, 3000);
        })

    };
    goOut() {
        console.log("go out from home");
    };
}

let human = new Human();
//hello
let promisesArray = [human.sit(), human.eat(), human.wash(), human.watchTv()];

let promise = Promise.all(promisesArray);

promise.then((data) => {
    console.log(data)
    human.goOut()
}).catch((err) => {
    console.log(err)
})