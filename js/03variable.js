// 프로그래밍 언어에서 가장 중요한 것은? 입력 연산 출력
// cpu에 최적화된 연산. 메모리의 사용을 최소화하는 것이 중요하다.

// 1. Use strict
// added in ES 5
// use this for valina Javascript
'use strict';
console.log(age);
// 2. Variable
// let (added in ES6)

//class나 함수 if나 for등 필요한 부분에서만 사용하는게 좋다.
//글로벌스코프는 항상 메모리에 탑재되어 있기 때문에 최소한으로 쓰는 것이 좋다.
let globalName = 'global name';
{
    let name = 'kimch';
    console.log(name);          // kimch
    name = 'hello';
    console.log(name);          // hello
    console.log(globalName);    // global name
}
console.log(name);              // 값이 나오지 않는다.
console.log(globalName);        // global name

// var (don`t ever use this!)
// var hoisting (move declaration from bottom to top) 어디에 선언했느냐에 상관없이 선언을 파일 제일 위로 끌어올려주는 것입니다.
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);               // 블럭scope가 무시되고 있다.

// 3. Constants
// cf. let으로 선언한 변수는 mutable 데이터타입이다.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
// : 이것은 지원한다는 것은 함수도 다른 데이터타입처럼 변수에 할당이 가능하다는 의미이다.

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, size: ${typeof size}`);

//자주하는 실수들 . 항상 연산하는 대상의 데이터타입을 생각해야한다.
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);          // infinity
console.log(negativeInfinity);  // -infinity
console.log(nAn);               // NaN

// bigInt (fairly new, don`t show it yet)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);

// string
const char =`c`;
const brendan = `brendan`;
const greeting = `hello` + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob =`hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// bollean
// false:0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// null은 내가 명확히 선언한 것이다.
let nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing}`);

// undefined
// undefined는 아직 할당하지 않은 것이다.
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol(`id`);
const symbol2 = Symbol(`id`);
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');  //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie  = { name: `ellie`, age: 20};
ellie.age = 21;
con

// 5. Dynamic typing: dynamically typed language
let text = `hello`;
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // error


