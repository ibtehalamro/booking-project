import express  from 'express';
import con from './database.js';
var app = express();


const htmlRootDir={root:"./public/"};

 
app.get('/hello', function (req, res) {
   res.sendFile(     "index.html" ,htmlRootDir);
})

   con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

      });



  app.get('/getdb', function (req, res) {
      const result=   con.query("SELECT * FROM accounts", function (err, result, fields) {
            if (err) throw err;
            res.json(result);
          });
          console.log(result);

 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})