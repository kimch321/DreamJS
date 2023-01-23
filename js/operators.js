// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);   //이처럼 ``사이의 글자는 작성한 그대로 표시된다.

// 2. NUmeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3);// exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement},  counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`preDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators
console.log(10 < 6);    // less than
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greater than
console.log(10 >= 6);   // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nulllableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log(`😜`);
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name : `ellie` };
const ellie2 = { name : `ellie` };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false);            //true
console.log(0 === false);           //false
console.log('' == false);           //true
console.log('' === false);          //false
console.log(null == undefined);     //true
console.log(null === undefined);    //false

// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Tenary operator: ?
// condition ? value1 : value2;
// 단, 이것으로 중첩if문을 만들면 코드가 더러워진다. 그러므로 간단한 코드를 쓸때만 쓴다.
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if check
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executes.
let i =3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
// O(n^2)이라 cpu에 좋지 않다?
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; i++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate form 0 to 10 and print only even numbers (use continue)
// for (let i = 0; i < 11; i++) {
//     if (i === 1 || i === 3 || i === 5 || i === 7 || i ===9 ) {
//         continue;
//     }
//     console.log(i);
// }
// for (let i = 0; i < 11; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
// for (let i = 0; i < 11; i++) {
//     if (i === 8) {
//         break;
//     }
//     console.log(i);
// }
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(i);
}