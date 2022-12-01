// 객체
let obj = {
    name: '사과',
    price: 1000,

    // 메소드
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }
};
obj.print();