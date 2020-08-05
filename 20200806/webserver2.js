const http = require('http');

/* 이건 임의로 정의한 값이기 때문에 변경이 가능함 */
const hostname = '127.0.0.1';
const port = 1337;

/* createServer를 통해 서버를 만든다.
 * http라는 모듈의 createServer라는 함수를 호출하면 http객체를 반환함.
 * http 모듈의 내장함수인 listen을 호출해 서버에 접속한다.  */
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  /* listen 함수를 통해 port, hostname을 전달받아 접속한 후 이에 응답해라 */
  console.log(`Server running at http://${hostname}:${port}/`);
});

// 확장형 코드(위에를 늘려놓은 것)
// var server = http.createServer();
// server.listen(port, hostname, funcion() {
//   // listen에 성공했을때 익명함수 실행되도록 구현한 것.
//   // 콜백메소드 (비동기처리)
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
