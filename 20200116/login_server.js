var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    if(request.method == 'GET') {
        fs.readFile('./html/login.html', function(error, data) {
            if(error) {
                console.log(error.message);
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(data);
            }
        });
    } else if(request.method == 'POST') {
        request.on('data', function(data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end('<h1>' + data + '</h1>');
        });
    }
}).listen(1234, function() {
    console.log('Server running at http://127.0.0.1:1234');
});