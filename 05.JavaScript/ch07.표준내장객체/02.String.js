let hello = '안녕하세요?';

// 속성
console.log(hello.length);      // 6

// Methods 
console.log(hello.charAt(0), hello[0]);         // 안, 안
console.log(hello.concat(' 여러분'));            // hello + ' 여러분'

console.log(hello.indexOf('하'));               // 2

// 디지털 시계, 00:00 ~ 23:59, 하루동안 3이 표시되는 시간은 몇초인가?
let totalSeconds = 0;
for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min++) {
        const display = hour + ':' + min;
        if (display.indexOf('3') >= 0)
            totalSeconds += 60;
    }
}
console.log(totalSeconds);

// 정규 표현식 
const sample = 'A quick brown fox 갈색의 재빠른 여우가 Jumps over 게으른 개를 The lazy dog';

let newStr = sample.replace(/[A-Z]/, '대');     // '[A-Z]', '/[A-Z]/' 는 작동 안됨
console.log(newStr);
newStr = sample.replace(/o/, 'O');       // 한 개만 바꿔줌
console.log(newStr);
newStr = sample.replace(/o/g, 'O');      // 모든 o를 O로 바꿈
console.log(newStr);
console.log(sample.replace(/([A-Z])\w+/g, 'XXX'));

// 한글 제거
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ-가-힣]/g, '');
console.log(newStr);

// 한글과 공백만 남기기
newStr = sample.replace(/[^ㄱ-ㅎㅏ-ㅣ-가-힣 ]/g, '');
console.log(newStr);

// Split
let fruits = '사과,배,감,포도';
let fruitArray = fruits.split(',');
console.log(fruitArray);
const products = '망치,톱,나사,도끼'.split(',');
console.log(products);

fruits = '사과, 배, 감, 포도';
fruitArray = fruits.split(', ');
console.log(fruitArray);

fruits = '사과,  배,감, 포도';
fruitArray = fruits.split(', ');
console.log(fruitArray);
fruitArray = fruits.split(',').map(s => s.trim());      // array element 각각에 대해서 callback함수 적용
console.log(fruitArray);

// 문자열의 일부분 추출
const today = new Date().toISOString();
console.log(today);                          // 2022-12-01T06:28:13.581Z
console.log(today.substring(0, 10));         // 날짜 추출: 2022-12-01
console.log(today.substring(11, 19));        // 시간 추출: 06:32:17

// 현재 날짜/시간을 YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
    return (num < 10) ? '0'+num: String(num);
}
function datetime() {
    const now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())} ` +
            `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`
}

const now = datetime();
console.log(now);                           // 2022-12-01 15:49:17
console.log(now.substring(2, 16));          // 22-12-01 15:49