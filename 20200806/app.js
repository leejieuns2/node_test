// main Application

const express = require('express'); // express라는 module을 load
const app = express();
const port = 3000

// get 뒤에  url 입력 시 해당하는 url에 접속하면 실행되는 콜백함수 선언 가능.
app.use(express.static('public'));
app.get('/', (req, res) => {
  // get : router & function : routing
  // 사용자가 어떠한 경로로 들어왔을 때 무엇을 실행시킬 것인가를 담는 함수.
  res.send('Hello World!')
})

// 동적으로 페이지를 만드는 방법
app.get('/dynamic', function(req, res) {
  var lis = '';
  for(var i = 0; i < 5; i++) {
    lis = lis + '<li>coding</li>';
  }
  var output = `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello, Static !
      <ul>${lis}</ul>
    </body>
  </html>
  `;
});

// 포트 번호 지정 시 해당 포트번호로 응답이 가능함.
// 콜백함수가 실행되면서 결과가 해당 포트번호의 localhost 서버에 출력됨.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// practice
// var express = require('express');
// var app = express();
// app.get();
// app.listen(3000, function() {
//   console.log('connected 3000 port !');
// })
