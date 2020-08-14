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

// form(GET ver.)
app.get('/form', function(req, res) {
  // form의 기본적인 값은 get 방식, method 설정 해주어야 함.
  res.render('form');
});

// form(GET ver.)
app.get('/form_receiver', function(req, res) {
  var title = req.query.title;
  var description = req.query.description;
  res.send(title + ', ' + description);
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
