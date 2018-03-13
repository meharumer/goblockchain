var express = require('express');
var fs = require('fs');
 var app = express();
 var port = process.env.PORT || 3000;


app.use(express.static(__dirname)); // If we run this line it will not let the app.GET line run

app.get('/', function(request, response){
   console.log('Hey there Its GET Request ');
   fs.readFile("index.html", function (error, pgResp) {
           if (error) {
               response.writeHead(404);
               response.write('<h1>Contents you are looking are Not Found</h1>');
           } else {
               response.writeHead(200, { 'Content-Type': 'text/html' });
               response.write(pgResp);
           }

           response.end();
       });
   // response.send('Hello, World! GET');
});


 app.listen(port, function(){
     console.log('Express app listening on port ' + port);
 });
