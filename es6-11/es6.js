
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

    // 💩 key와 value가 이미 정의된 경우.
    const ellie2 = {
        name: name,
        age: age,
    };

    // ✨ key 와 value가 동일할 경우.
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

    // 💩
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    // ✨ Destructuring Assignment
    {
        const { name, level } = student;
        console.log(name, level);

        // key의 이름을 변경할 수 있다.
        const { name: studentName, level: studentLevel } = student;
        console.log(studentName, studentLevel);
    }

    // array
    const animals = ['🐶', '😽'];

    // 💩
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    // ✨Destructuring Assignment, 순서에 의존적이다. first에는 인덱스가 0인 요소, second에는 인덱스가 1인 요소가 들어간다.
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
    // 배열의 요소를 낱개로 가져와서 '복사'한다.
    // 주의 할점. 배열의 요소에 담겨 있는건 객체가 아니라
    // 객체를 가리키는 주소이므로,(참조)
    // 객체의 값이 바뀌면 배열의 요소의 값도 바뀐다.
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, { key: 'key3' }];
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);

    // object copy
    // 오브젝트도 '복사' 할 수 있다.
    const obj3 = { ...obj1 };
    console.log(obj3);

    // array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // object merge
    const dog1 = { dog: '🐕' };
    const dog2 = { dog: '🐶' };
    // 주의! 두 오브젝트의 키가 같다면 덮어씌여진다.
    const dog = { ...dog1, ...dog2 };
    console.log(dog);
    console.clear();
}

/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
    // 💩
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

    // ✨
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
    // 💩
    {
        let component;
        if (isCat) {
            component = '😸';
        } else {
            component = '🐶';
        }
        console.log(component);
    }

    // ✨
    {
        const component = isCat ? '😸' : '🐶';
        console.log(component);
        console.log(isCat ? '😸' : '🐶');
    }
    console.clear();
}

/**
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
    const weather = '🌤';
    const temparature = '16°C';

    // 💩
    console.log(
        'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );

    // ✨

    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);

}