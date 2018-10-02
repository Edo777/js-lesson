const url = require("url");

const parsedURL = url.parse('https://www.facebook.com/jcnjxncjdnjcdn/bjhbhjbjhbjh');
console.log(parsedURL);

class Validate {
    static registration(data) {
        return new Promise((resolve, reject) => {
            if (!data.password || !data.username) {
                return reject('username and password is required');
            }
            return resolve();
        });
    }
}

// module.exports = Validate;