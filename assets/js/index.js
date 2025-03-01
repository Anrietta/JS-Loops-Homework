// 1. Вивести в консоль квадрати чисел від 1 до 10 (за допомогою циклу)



// for (let i = 1; i <= 10; i++) {
//     console.log(i*i);
// }


// let num = 1;
// while (num <= 10) {
//     console.log(num*num);
//     num++;
// }

// let num = 1;
// do {
//     console.log(num*num);
//     num++;
// } while (num <= 10);


// 2. Написати функцію, яка запитує через prompt пароль користувача, порівнює його з тим, який у неї збережений (захардкоджений у константі). Якщо пароль співпав - виводить на консоль “Ви успішно увійшли в систему”, якщо ні - продовжує запитувати пароль і перевіряти, поки не введуть правильно (за допомогою вічного цикла)

// let userPassword = '';
// const PASSWORD_PATTERN = 'aabbcc';

// do {
//     userPassword = String(prompt('Enter your password!'))
// } while (userPassword !== PASSWORD_PATTERN)

// console.log('You entered the system successfully');



// 3. Обчислити сумму чисел від 1 до 100 і вивести її в консоль

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);


// 4. Вивести числа від 10 до 50, які кратні 5.

// for (let i = 10; i <= 50; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }


// 5. Намалювати в консолі символами “*” трикутник заданого користувачем розміру

// *
// **
// ***
// ****
// *****
// ******


// let userParam = Number(prompt('Enter a number :'));
// let triangleBody = '';

// for (let i = 1; i <= userParam; i++) {
//     triangleBody += '*';
//     console.log(triangleBody);
// }



// 6. Намалювати пустий квадрат з діагоналлю (зліва зверху - до права низу)

// let squareSides = 20;

// for (let i = 0; i < squareSides; i++) {
//     let row = '';

//     for (let j = 0 ; j < squareSides; j++) {
//         if (
//             i === 0 || 
//             j === 0 || 
//             i === squareSides - 1 || 
//             j === squareSides - 1 || 
//             i === j
//         ) {
//             row += 'X';
//         } else {
//             row += ' ';
//         }
//     }
//     console.log(row);
// }

// ------------------------------------------------------------

// let squareSides = 20;

// for (let i = 0; i < squareSides; i++) {
//     let row = '';

//     for (let j = 0 ; j < squareSides; j++) {
//         row += (
//             i === 0 || 
//             j === 0 || 
//             i === squareSides - 1 || 
//             j === squareSides - 1 || 
//             i === j                  
//         ) ? 'X' : ' ';
//     }

//     console.log(row);
// }



// 7. Задачка з *: Зробити квадрат зі зворотньою діагоналлю (з правого верхнього до лівого нижнього)

// let squareSides = 20;

// for (let i = 0; i < squareSides; i++) {
//     let row = '';

//     for (let j = 0 ; j < squareSides; j++) {
//         if (
//             i === 0 || 
//             j === 0 || 
//             i === squareSides - 1 || 
//             j === squareSides - 1 || 
//             i === (squareSides - 1) - j
//         ) {
//             row += 'X';
//         } else {
//             row += ' ';
//         }
//     }
//     console.log(row);
// }

// -----------------------------------------------------------

// let squareSides = 20;

// for (let i = 0; i < squareSides; i++) {
//     let row = '';

//     for (let j = 0 ; j < squareSides; j++) {
//         row += (
//             i === 0 || 
//             j === 0 || 
//             i === squareSides - 1 || 
//             j === squareSides - 1 || 
//             i === (squareSides - 1) - j                
//         ) ? 'X' : ' ';
//     }

//     console.log(row);
// }