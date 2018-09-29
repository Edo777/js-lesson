const db = [];

class Dao {
    registration(data) {
        return new Promise((resolve, reject) => {
            db.push(data);
            if (db.length === 0) {
                return reject("wrong");
            }
            return resolve(db);
        })
    }
}

module.exports = new Dao();