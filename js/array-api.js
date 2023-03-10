// Q1. make a string out of an array
// {
//     const fruits = ['apple', 'banana', 'orange'];
//     let result = '';
//     for (val of fruits) {
//         result += val;
//     }
//     console.log(result);
// }
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
}

// Q2. make an array out of a string
{
    // const fruits = '🍎, 🥝, 🍌, 🍒';
    // fruits.forEach((val,fruits) => console.log(val));
}

{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result =fruits.split(',');
    console.log(result);

}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// {
//     const array = [1, 2, 3, 4, 5];
//     for (let i = 0; i < 4; i++) {
//         array.splice(`${i}`,0,array.pop())
//     }
//     console.log(array)
// }
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}

// Q4. make new array without the first two elements
// {
//     const array = [1, 2, 3, 4, 5];
//     const array2 = array.splice(2);
//     console.log(array)
//     console.log(array2)
// }
{
    const array = [1, 2, 3, 4, 5];
    const array2 = array.slice(2 , 5);
    console.log(array2)
    console.log(array)
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];
let a = students[2].score;

// Q5. find a student with the score 90
// {
//     for( let i = 0; i < students.length; i++) {
//         if (students[i].score === 90) {
//             console.log(students[i].name)
//         }
//     }
// }
{
    let result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
// { let enrolledStudents = [];
//     for (let i =0; i <students.length; i++) {
//         if (students[i].enrolled === true) {
//             enrolledStudents.push(students[i]);
//         }
//     }
//     console.log(enrolledStudents)
// }
{
    const result = students.filter((student) => student.enrolled)
    console.log(result)
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// {
//     let scores = [];
//     for (let i = 0; i < students.length; i++) {
//         scores.push(students[i].score);
//     }
//     console.log(scores);
// }
{
    const result = students.map((student) => student.score)
    console.log(result)
}

// Q8. check if there is a student with the score lower than 50
// {
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].score <= 50) {
//             console.log(`존재한다. 그의 이름은 ${students[i].name}이다.`)
//         }
//     }
// }
{
    const result = students.some((student) => student.score<50);
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
}

// Q9. compute students' average score
// {
//     let sum = 0;
//     for (let i = 0; i < students.length; i++) {
//         sum += students[i].score
//     }
//     avg = sum/students.length;
//     console.log(avg);
// }
{
    const result = students.reduce((prev, curr) => prev + curr.score);
    console.log(result/students.length)
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// {
//     let string = '';
//     for (let i = 0; i < students.length-1; i++) {
//         string += `${students[i].score}, `;
//     }
//     string += students[students.length-1].score;
//     console.log(string)
// }
{
    const result = students
        .map((student) => student.score)
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map(student => student.score)
        .sort((a,b) => a-b )
        .join();
    console.log(result);
}