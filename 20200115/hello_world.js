var http = require('http');

http.createServer(function handler(req, res) {
    res.writeHead (200, {'Content-type': 'text/html'});
    res.write('<h1>Server Test</h1>')
    res.end('Hello world!!\n');
    // eventHandler 기능을 하는 callback 함수 
    // => eventDriven (당장 수행되는 것이 아닌 서버가 동작되었을 때 수행되기 때문)
    // writeHead => html head 부분, end : 본문 부분
}).listen(1337, '127.0.0.1');

/* 큰 틀 : http.createServer(안에서 handler 함수 만들고 있음).listen(1337, '127.0.0.1');
 * 결과값을 함수로 생성하여 반환하고 있음. 매개변수 대신 함수를 생성하여 작성 가능
        => 함수형 프로그래밍의 특징
 * req : request (응답요청) // res : response (응답결과) 를 의미함.
 */

console.log('Server running at http://127.0.0.1:1337');