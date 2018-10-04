const cars = [
    { id: 1, name: "mercedes", isDeleted: false }
];

class Dao {
    get(id) {
        return new Promise((resolve, reject) => {
            var car = cars.filter((item) => {
                return item.id === Number(id);
            });
            if (!car.length || car.isDeleted) {
                return reject("wrong car id");
            }
            return resolve(car[0]);
        })
    }
}

module.exports = new Dao();