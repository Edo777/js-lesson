let Array = [10, 45, 78, 96, 32, 45, 78, 2, 3, 3, 2, 2, 2, 3, 4, 4, 5, 4, 5, 6, 7, 7, 7];

class Homework {
    addRandomElements() {
        let arr = [];
        let randomValue = Math.floor(Math.random() * 10);
        let index = 0;
        while (index < 5) {
            while (arr.indexOf(randomValue) > -1) {
                randomValue = Math.floor(Math.random() * 10);
            }
            arr.push(randomValue);
            index++;
        }
        return arr;
    }
}
let obj = new Homework();

console.log(obj.addRandomElements());
