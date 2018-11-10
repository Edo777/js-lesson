const express = require("express");
const jwtToken = require("jsonwebtoken");
const bodyparser = require("body-parser")
const app = express();
const user = [{
    id : 1,
    name : "edo",
    password: "123"
}];
app.use(bodyparser())
app.post('/login', (req, res) => {
    if(req.body.password === user[0].password){
        const token = jwtToken.sign({
            id: user[0].id
        }, "secret", {expiresIn : 20});
        return res.status(200).send(token);
    }else{
        res.status(401).send("error");
    }
});

app.use((req, res, next) => {
    if(!req.headers.token){
        return res.status(400).send("token musb be");
    }else{
        jwtToken.verify(req.headers.token, "secret", (err, decoded) => {
            if(err){
                return res.status(400).send(err);
            }
            res.locals["id"] = decoded.id;
            next();
        });
    }
})
app.get('/', (req, res) => {
    if(user[0].id == res.locals["id"]){
        res.json({"name" : user[0].name})
    }else{
        res.status(401).send("error");
    }
})





app.listen(3000, () => {
    console.log("listening...");
})