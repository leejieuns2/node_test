// main Application
// supervisor -> 계속 변경사항이 적용되게 하는 명령어.
var express = require('express');
// bodyparser import
var bodyParser = require('body-parser');
var app = express();
const port = 3000

// 코드의 인덴테이션을 이쁘게 해주는 기능.
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', '../views');
app.use(express.static('public'));

// bodyParser 사용
app.use(bodyParser.urlencoded({ extended: false }))

// form(GET ver.)
// query string을 통해서 정보를 전달할 경우 GET 방식을 사용해야 한다.
app.get('/form', function(req, res) {
  // form의 기본적인 값은 get 방식, method 설정 해주어야 함.
  res.render('form');
});

// form(GET ver.)
app.get('/form_receiver', function(req, res) {
  // get 방식에서는 request에서 쿼리에 저장된 입력값을 가져옴.
  var title = req.query.title;
  var description = req.query.description;
  res.send(title + ', ' + description);

  res.send('Hello, GET!');
});

// form(POST ver.)
app.post('/form_receiver', function(req, res) {
  // post에서는 쿼리가 아닌 request의 body 부분에서 저장된 입력값들을 가져옴.
  var title = req.body.title;
  var description = req.body.description;
  // 이런식으로 작성하면 처음엔 에러가 나기 때문에 에러 해결 방법으로 body-parser라는 middleware 설치
  res.send(title + ', ' + description);

  res.send('Hello, POST!');
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
