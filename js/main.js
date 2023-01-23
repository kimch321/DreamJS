// JavaScript is very flexible
//flexible === dangerous
// added ECMAScript 5
// 'use strict'
// 비상식적인 선언을 하지 못하게 해준다.
// 브라우저의 엔진이 js를 빠르게 읽을 수 있다.

'use strict';
console.log('Hello World');

var topic = "자바스크립트";
{
    topic = "리액트";
    console.log(topic); // 리액트
}
console.log(topic); // 리액트

function a(){
    console.log("잘했어요!");
}
a();
