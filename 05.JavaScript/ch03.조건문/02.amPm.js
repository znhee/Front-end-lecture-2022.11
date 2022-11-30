const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

const hour = date.getHours();
if (hour < 12)
    console.log(`${date.toLocaleString()} 은/는 오전입니다.`);
else
    console.log(`${date.toLocaleString()} 은/는 오후입니다.`);

const amPm = (hour < 12) ? '오전' : '오후';
console.log(`${date.toLocaleString()} 은/는 ${amPm}입니다.`);
