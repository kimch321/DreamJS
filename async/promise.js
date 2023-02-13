'use strict'

// Promise is a javaScript object for asynchronous operation
// point 1. state : 프로세스가 오퍼레이션을 수행하는 중인지, 성공했는지, 실패했는지 여부를 이해.
// point 2. producer, consumer : 우리가 원하는 데이터를 제공하는 사람, 그리고 그 데이터를 필요로 하고 사용하는 사람의 차이점을 이해.
// state : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read file)
    // 프로미스를 만드는 순간 입력한 함수가 바로 실행된다.
    // 만약 네트워크 요청을 사용자가 요구했을 때만 하는 경우, 예로 버튼을 눌렀을 때 요청을 하는 경우라면, 사용하면 안될 것이다.
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        //reject(new Error('no network'));
    },2000);
});

// 2. Consumers: then, catch, finally
// 여기서 value라는 파라미터는 resolve 콜백함수를 통해 전달된 값을 의미한다. 여기서는 'ellie'.
promise //
    .then((value) => {
    console.log(value);
    })      //then은 promise를 리턴하기 때문에 catch를 사용할 수 있다. 이것을 체이닝이라 한다.
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    })

// 3. Promise chaning
const fetchNumber = new Promise((resolve,reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🥘`), 1000);
    });

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

getHen()
    .then(getEgg)
    .catch(error => {
        return '🍞';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);