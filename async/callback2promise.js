'use strict'

// JavaScript is synchronous.
// Execute the code block by in order after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(() =>
    console.log('2')
, 1000);
console.log('3');   // 콜백함수는 내가 전달한 함수를 나중에 불러주는 함수.

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if
                ((id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy'))
                {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }
    getRoles(user) {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({name: 'ellie', role: 'admin'}) ;
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}

const userStorage = new UserStorage();
const id =prompt('enter your id');
const password =prompt('enter your password');

async function userCheck() {
    await userStorage.loginUser(id,password)
        .then(userStorage.getRoles)
        .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
        .catch(console.log);
}

