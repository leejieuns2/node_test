var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var text = "";

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
            text += data;
            var parsedStr = querystring.parse(text, '&', '=');
            console.log(parsedStr.id);
            console.log(parsedStr.pwd);
            
            fs.readFile('./html/login_failed.html', function(error, data) {
                if(parsedStr.id == parsedStr.pwd) {
                    response.writeHead(302, {'Location': 'https://cs.dongduk.ac.kr'});
                    response.end(data);
                }
                else {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(data);
                }
            });
        });
    }
}).listen(1234, function() {
    console.log('Server running at http://127.0.0.1:1234');
});