const clientTable = [

]

class Dao {
    static signUp(u, p) {
        return new Promise((res, rej) => {
            let previewsLength = clientTable.length;
            clientTable.push(
                { id: 5, username: u, password: p }
            )
            if (clientTable.length == previewsLength) {
                return rej("something wrong!")
            }
            return res("ok");
        })
    };

    static login(u, p) {
        return new Promise((res, rej) => {
            let t = clientTable.filter((i) => {
                return (i.username == u && i.password == p);
            });
            if (t.length == 0) {
                return rej("wrong username or assword");
            }
            return res({ id: t[0].id });
        })
    };
}

module.exports = Dao;