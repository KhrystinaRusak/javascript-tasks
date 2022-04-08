// Реализовать http сервер на ноде. Будет обрабатывать GET, POST, PUT 
//запросы на один и тот же УРЛ.
// GET - Вернуть массив users
// POST - Добавить юзера в массив users
// PUT - Перезаписать массив users каким-либо значением (новым массивом)
let http = require('http');
let url = require('url');
let dt = require('./myfirstmodule');

// create a server object:
http.createServer(function(req, res) {
    // add an HTTP Header
    res.writeServer(200, { 'Content-Type': 'text/html' });
    //res.write(req.url); // write a response to the Client
    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;
    res.end(txt); // end the response
}).listen(8080); // the server object listens on port 8000

// include your own module
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The data and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8000);