// main Application

const express = require('express'); // express라는 module을 load
const app = express();
const port = 3000

// get 뒤에  url 입력 시 해당하는 url에 접속하면 실행되는 콜백함수 선언 가능.
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 포트 번호 지정 시 해당 포트번호로 응답이 가능함.
// 콜백함수가 실행되면서 결과가 해당 포트번호의 localhost 서버에 출력됨.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


var express = require('express');
var app = express();
app.get();
app.listen(3000, function() {
  console.log('connected 3000 port !');
})
