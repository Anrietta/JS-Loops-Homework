// 1. Сума чисел.
//    Написати цикл, який обчислює суму всіх чисел від 1 до 100 і виводить результат у консоль.

// let count = 0;
// let sum = 0;

// while (count <= 100) {
//     sum += count;
//     count++;
// }
// console.log(sum);

// 2. Перевірка на просте число
//    написати код, який запитує число у користувача і перевіряє, чи воно є простим (ділиться тільки на 1 і на себе). Використати цикл для перевірки всіх можливих дільників.
// (задача не така проста, як може здатися на перший погляд)

// let num1 = +prompt("Enter your number:");
// let arrDivisor = [];

// for (let i = 1; i <= num1; i++) {
//     if (num1 % i === 0) {
//         arrDivisor[arrDivisor.length] = i;
//     }

// }
// console.log(arrDivisor);
// alert(`The divisors of ${num1} are ${arrDivisor}`)


// 3. Перевернуте число 
//    Дано число n. Вивести його цифри у зворотному порядку без використання методів масивів (наприклад, для 12345 вивід має бути 54321).

// let number = String(prompt('Enter your number:'));
// let reverse = '';

// for (let i = number.length - 1; i >= 0; i--) {
//     reverse += number[i];

// }
// console.log(reverse);




// 4. Завдання: Намалювати в консолі шахівницю заданого розміру, де:  
// - Чорні клітинки позначені символом "■", білі — символом "□".  
// - Розмір дошки задається користувачем і може бути будь-яким парним числом.  
// - У центрі дошки має бути "ціль": символ "✪", оточений чорними та білими клітинками у правильному шаховому порядку.  



// let chessBoardSides = Number(prompt('Enter a countable number: '));
// const center = chessBoardSides / 2;

// if (chessBoardSides % 2 === 0) {
//     for (let i = 1; i <= chessBoardSides; i++) {
//         let row = '';
    
//         for (let j = 1; j <= chessBoardSides; j++) {
//             if (((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) && (i !== center || j !== center)) {
//                 row += '■';
//             } else if (i === center && j === center) {
//                 row += '✪';
//               } else {
//                 row += '□';
//             }
//         }
//         console.log(row);

//     }
// } else if (chessBoardSides % 2 === 1) {
//     alert(`Number ${chessBoardSides} is not countable! Try again!`);
// } else {
//     alert(`Unknown symbols! Enter countable number, please!`);
// }






