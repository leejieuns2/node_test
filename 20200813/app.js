// main Application
// supervisor -> 계속 변경사항이 적용되게 하는 명령어.
var express = require('express');
var app = express();
const port = 3000

// 코드의 인덴테이션을 이쁘게 해주는 기능.
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', '../views');
app.use(express.static('public'));

// query string
app.get('/topic', function(req, res) {
  var topics = [
    'Javascript is ...',
    'Node.js is ...',
    'Express is ...'
  ];

  var output = `
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">Node.js</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.query.id]}`
  res.send(output);
});

// path 방식
app.get('/topic/:id', function(req, res) {
  var topics = [
    'Javascript is ...',
    'Node.js is ...',
    'Express is ...'
  ];

  var output = `
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">Node.js</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.params.id]}`
  res.send(output);
});

app.get('/topic/:id/:mode', function(req, res) {
    res.send(req.params.id + ', ' + req.params.mode)
});

// templete engine
app.get('/templete', function(req, res) {
  res.render('temp', {time:Date(), title:'Jade'});
  // temp 라는 이름의 파일을 렌더링해서 전송한다.
});

// get 뒤에  url 입력 시 해당하는 url에 접속하면 실행되는 콜백함수 선언 가능.
app.get('/', (req, res) => {
  // get : router & function : routing
  // 사용자가 어떠한 경로로 들어왔을 때 무엇을 실행시킬 것인가를 담는 함수.
  res.send('Hello World!')
})

// 포트 번호 지정 시 해당 포트번호로 응답이 가능함.
// 콜백함수가 실행되면서 결과가 해당 포트번호의 localhost 서버에 출력됨.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
