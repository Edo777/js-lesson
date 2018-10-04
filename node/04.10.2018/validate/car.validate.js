const Joi = require('joi');

class Validate{
    get(_data) {
        const getSchema = Joi.object().keys({
            id : Joi.number().min(1).required()
        });
        return new Promise((resolve, reject) => {
            Joi.validate(_data, getSchema, (err, result) => {
                if(err){
                    return reject(err.details[0].message);
                }
                return resolve();
            })
        })
    }
}

module.exports = new Validate();