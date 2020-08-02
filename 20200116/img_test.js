var http = require('http');
var fs = require('fs'); // 파일 처리 모듈
http.createServer(function (request, response) {
    // HTML 파일을 읽어 응답 만들기

    fs.readFile('./img/apeach2.jpg', function(error, data) {
        if(error) {
            console.log(error.message);
        } else {
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.end(data);
        }
    });
}).listen(1234, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1234');
