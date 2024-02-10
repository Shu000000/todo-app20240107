exports.getPg = function(){
    // let sqlite3 = require('sqlite3').verbose();
    // let db = new sqlite3.Database('todo.db');

    const {Client} = require('pg');
    const client = new Client({
        connectionString: process.env.POSTGRES_URL,
    });
    client.connect()
    .then(() => console.log("接続完了"))
    .then(() => client.query(query))
    .then(result => console.log(result.rows))
    .catch((err => console.log(err)))
    .finally((() => client.end()));

    // return new Promise((resolve, reject)=>{
    //     db.all(sql,(err, rows)=>{
    //         resolve(rows);
    //     });
    // });
}