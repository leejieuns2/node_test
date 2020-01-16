var http = require('http');
var fs = require('fs'); // 파일 처리 모듈
http.createServer(function (request, response) {
    // HTML 파일을 읽어 응답 만들기

    fs.readFile('./html/test_res.html', function(error, data) {
        if(error) {
            console.log(error.message);
        } else {
            response.writeHead(302, {'Location': 'https://cs.dongduk.ac.kr'});
            // 첫번째 값은 응답에 대한 코드값
            response.end(data);
        }
    });
}).listen(1234, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1234');