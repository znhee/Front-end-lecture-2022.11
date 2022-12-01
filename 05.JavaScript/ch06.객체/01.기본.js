// 배열(array)
let fruits = ['감', '귤', '배'];
let personArray = ['제임스', 28, '남자', 175, '프로그래머', 30.0];

// 객체(object)
let personInfo = {
    'name': '제임스', 'age': 28, 'gender': '남자',
    'height': 175, 'job': '프로그래머', 'bmi':30.0
}
console.log(personInfo);

// key 값으로 string인 경우에는 ' ' 생략 가능
// 한글 key 값도 가능
let maria = {name: '마리아', age: 23, gender: '여자'}
console.log(maria);

// 객체에 대한 접근(access)
console.log(maria['name'], maria['age']);       // 이런식으로는 사용 x
console.log(maria.name, maria.age);

let key = 'age';
console.log(maria[key]);                // maria.key 는 허용되지 x

const name = '홍길동';
const age = 35;
const gender = '남자';
const hong = {name: name, age: age, gender: gender};
console.log(hong);

// ES-6
// key값과 같은 변수명은 생략 가능
const hong2 = {name, age, gender};
console.log(hong2);