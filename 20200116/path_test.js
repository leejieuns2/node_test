var http = require('http');
var fs = require('fs'); // 파일 처리 모듈
var url = require('url');
http.createServer(function (request, response) {
    // HTML 파일을 읽어 응답 만들기
    var pathName = url.parse(request.url).pathname;
    if(pathName == '/') {
        fs.readFile('./html/index.html', function(error, data) {
            if(error) {
                console.log(error.message);
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                // 첫번째 값은 응답에 대한 코드값
                response.end(data);
            }
        });
    } else if(pathName == '/second') {
        fs.readFile('./html/second.html', function(error, data) {
            if(error) {
                console.log(error.message);
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(data);
            }
        });
    }
}).listen(1234, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1234');