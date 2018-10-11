const express = require("express");

const server = express();
const cars = [{ id: 1, name: "mersedes" }];


function validate(req, res, next) {
    Joi.validate(req.params, schema, (err, result) => {
        if(!err){
            next()
        }
    })
    if (cars.length === 0) {
        return res.status(404).send("not cars");
    }
    return next()
};

function getAllCars(req, res) {
    //req.params
    //res.send(req.params);
    //res.send(req.body);
    //npm i body-parser => const bp = require("body-parser") 
    //server.use(bp.json())
    //server.use(express.json())
};
const middles = [express.json(), validate];
server.post('/car', middles , getAllCars);
server.get();
server.post();


server.listen(3000, () => {
    console.log("listening...");
})

