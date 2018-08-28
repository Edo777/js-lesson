class Student {
    static read() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("read");
            }, 4000);
        })

    };

    static study() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("study");
            }, 2000);
        })
    };

    static getUp() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("get up");
            }, 3000);
        })
    };
}
Student.getUp().then((d1) => {
    console.log("1")
    Student.read().then((d2) => {
        console.log("2")
        Student.study().then((d3) => {
            console.log("3")
            console.log(d1, " ", d2, " ", d3)
        })
    })
})

