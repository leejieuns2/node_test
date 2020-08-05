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

/* 2-4-3 순서로 실행되는 이유 : data.txt를 읽고 있는 동안은 익명함수 실행 안됨.
 * 그 사이에 그 뒤에 있는 코드들이 실행되고 있음. */
