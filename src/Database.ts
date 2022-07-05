import mysql from 'mysql';
import util from 'util';
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "booking"
});
 
export default con;
