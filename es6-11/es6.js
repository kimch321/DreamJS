
/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */

{
    const ellie1 = {
        name: 'Ellie',
        age: '18',
    };

    const name = 'Ellie';
    const age = '18';

    // ๐ฉ key์ value๊ฐ ์ด๋ฏธ ์ ์๋ ๊ฒฝ์ฐ.
    const ellie2 = {
        name: name,
        age: age,
    };

    // โจ key ์ value๊ฐ ๋์ผํ  ๊ฒฝ์ฐ.
    const ellie3 = {
        name,
        age,
    };

    console.log(ellie1, ellie2, ellie3);
    console.clear();
}

/**
 * Destructuring Assignment
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 */
{
    // object
    const student = {
        name: 'Anna',
        level: 1,
    };

    // ๐ฉ
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    // โจ Destructuring Assignment
    {
        const { name, level } = student;
        console.log(name, level);

        // key์ ์ด๋ฆ์ ๋ณ๊ฒฝํ  ์ ์๋ค.
        const { name: studentName, level: studentLevel } = student;
        console.log(studentName, studentLevel);
    }

    // array
    const animals = ['๐ถ', '๐ฝ'];

    // ๐ฉ
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    // โจDestructuring Assignment, ์์์ ์์กด์ ์ด๋ค. first์๋ ์ธ๋ฑ์ค๊ฐ 0์ธ ์์, second์๋ ์ธ๋ฑ์ค๊ฐ 1์ธ ์์๊ฐ ๋ค์ด๊ฐ๋ค.
    {
        const [first, second] = animals;
        console.log(first, second);
    }
    console.clear();
}

/**
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 */
{
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];

    // array copy -
    // ๋ฐฐ์ด์ ์์๋ฅผ ๋ฑ๊ฐ๋ก ๊ฐ์ ธ์์ '๋ณต์ฌ'ํ๋ค.
    // ์ฃผ์ ํ ์ . ๋ฐฐ์ด์ ์์์ ๋ด๊ฒจ ์๋๊ฑด ๊ฐ์ฒด๊ฐ ์๋๋ผ
    // ๊ฐ์ฒด๋ฅผ ๊ฐ๋ฆฌํค๋ ์ฃผ์์ด๋ฏ๋ก,(์ฐธ์กฐ)
    // ๊ฐ์ฒด์ ๊ฐ์ด ๋ฐ๋๋ฉด ๋ฐฐ์ด์ ์์์ ๊ฐ๋ ๋ฐ๋๋ค.
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, { key: 'key3' }];
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);

    // object copy
    // ์ค๋ธ์ ํธ๋ '๋ณต์ฌ' ํ  ์ ์๋ค.
    const obj3 = { ...obj1 };
    console.log(obj3);

    // array concatenation
    const fruits1 = ['๐', '๐'];
    const fruits2 = ['๐', '๐ฅ'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // object merge
    const dog1 = { dog: '๐' };
    const dog2 = { dog: '๐ถ' };
    // ์ฃผ์! ๋ ์ค๋ธ์ ํธ์ ํค๊ฐ ๊ฐ๋ค๋ฉด ๋ฎ์ด์์ฌ์ง๋ค.
    const dog = { ...dog1, ...dog2 };
    console.log(dog);
    console.clear();
}

/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
    // ๐ฉ
    {
        function printMessage(message) {
            if (message == null) {
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }

    // โจ
    {
        function printMessage(message = 'default message') {
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }
    console.clear();
}

/**
 * Ternary Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
{
    const isCat = true;
    // ๐ฉ
    {
        let component;
        if (isCat) {
            component = '๐ธ';
        } else {
            component = '๐ถ';
        }
        console.log(component);
    }

    // โจ
    {
        const component = isCat ? '๐ธ' : '๐ถ';
        console.log(component);
        console.log(isCat ? '๐ธ' : '๐ถ');
    }
    console.clear();
}

/**
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
    const weather = '๐ค';
    const temparature = '16ยฐC';

    // ๐ฉ
    console.log(
        'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );

    // โจ

    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);

}