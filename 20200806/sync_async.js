var fs = require('fs');

// Sync
console.log(1);
var data = fs.readFileSync('data.txt', {encoding: 'utf8'});
console.log(data);


// Async
console.log(2);

// data를 먼저 읽은 다음에 다 끝나면 익명함수인 funcion함수를 호출해주는 방식
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data) {
  console.log(3);
  console.log(data);
});
console.log(4);
