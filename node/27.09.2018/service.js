const daoEmitter = require("./dao");

daoEmitter.on('/login', (data) => {
    daoEmitter.emit('login-service', data);
    daoEmitter.on('login-dao', (users) => {
        users = users.map((d) => {
            return {
                name: d.name,
                password: d.password
            }
        })
        data.res.end(JSON.stringify({ data: users }));
    })
})



module.exports = daoEmitter;
