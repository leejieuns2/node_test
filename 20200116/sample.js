// case 1 (일반적인 프로그래밍 문법)
function calc(num1, num2, type) {
    if(type == '+'){
        return num1 + num2;
    } else if(type == '-'){
        return num1 - num2;
    }
}

calc(1, 2, '+');

// case 2 (함수를 매개변수로 사용하는 자바스크립트의 특성)
function calc(num1, num2, func) {
    return func(num1, num2);
}

function add(num1, num2) {
    return num1 + num2;
}

calc(1, 2, add);