class Human {
    eat() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("eat");
                resolve("eat")
            }, 1000);
        })
    };
    wash() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("wash");
                resolve("wash");
            }, 2000);
        })
    };
    watchTv() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("watch tv");
                resolve("watch tv")
            }, 3000);
        })

    };
    goOut() {
        console.log("go out from home");
    };
}

let human = new Human();

Promise.all([human.eat(), human.wash(), human.watchTv()]).then((data) => {
        console.log(data);
})