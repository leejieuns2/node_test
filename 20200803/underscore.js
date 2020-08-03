/* underscore 모듈을 사용하기 위해 필요하며, underscore 객체를 리턴함 주로 변수 선언 시 _ (언더바)를 써줌 */
var _ = require('underscore');
var arr = [ 3, 6, 9, 12 ];

/* underscore를 이용하면 array의 값에 더 쉽게 접근할 수 있음 */
console.log(arr[0]);
console.log(_.first(arr));
console.log(arr[arr.length-1]);
console.log(_.last(arr));
