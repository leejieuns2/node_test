// 모듈 가져오기
var express = require('express'); // 변수를 통해 express 모듈 제어 가능
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs'); // 파일 시스템을 제어하는 모듈 추가

// bodyParser 모듈을 사용하겠다는 의미.
app.use(bodyParser.urlencoded({ extended: false }));

// app에 대한 설정
app.set('views', 'views_file');
app.set('view engine', 'jade');
// view engine으로 jade라는 모듈을 사용한다는 의미.

app.locals.pretty = true;

// Connection
app.listen(3000, function() {
  // 애플리케이션이 3000 포트에 연결되면, 실행되는 콜백함수 정의
  console.log('Connected, 3000 port !');
});

// Routing (적당한 url에 따른 적당한 연결 수행)
app.get('/topic/new', function(req, res) {
  fs.readdir('data', function(err, files) {
    // data 디렉토리에 있는 파일들이 list 형식으로 파라미터로 전달됨.
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error !');
    }
    res.render('new', {topics:files});
 });
});

app.get(['/topic', '/topic/:title'], function(req, res) {
  fs.readdir('data', function(err, files) {
    // data 디렉토리에 있는 파일들이 list 형식으로 파라미터로 전달됨.
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error !');
    }

    var title = req.params.title;
    if(title) {
      // topic/:title 부분
      fs.readFile('data/' + title, 'utf8', function(err, data) {
        // 만약에 에러가 발생한다면
        if(err) {
          console.log(err);
          res.status(500).send('Internal Server Error !');
        }
        res.render('view', { topics:files, title:title, description:data });
      });
    } else {
        res.render('view', { topics:files, title:'Welcome', description: 'Hello, Javascript for Server.' }); // view.jade 연결
    }
  });
});

app.post('/topic', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/' + title, description, function(err) {
    // 만약에 에러가 발생한다면
    if(err) {
      console.log(err);
      res.status(500).send('Internal Server Error !');
    }
    res.redirect('/topic/' + title);
  });
});
