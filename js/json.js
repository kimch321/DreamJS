// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //symbol: Symbol("id"),
    jump: () => {
        console.log(`${name} can jump!`);
    }
};

json = JSON.stringify((rabbit));
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
rabbit.jump();
// obj.jump(); 없다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// 유용한 사이트

// JSON Diff : 서버에서 받아온 데이터 를 비교하여 달라진 점을 알려준다.
// JSON Beautifier : 포멧이 깨진 경우 예쁘게 만들어줌
// JSON Parser :
// JSON Validator : 유효성 검사.