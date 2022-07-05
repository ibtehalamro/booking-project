import mysql from 'mysql';
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "booking"
});
export default con;
//# sourceMappingURL=Database.js.map