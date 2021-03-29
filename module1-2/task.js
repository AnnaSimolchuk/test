// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Пиши код ниже этой строки
//   const message = `Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee}) включена в сумму заказа.`;

//   // Пиши код выше этой строки
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));


// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// if (ordered <= available) {
//   message = `Заказ оформлен, с вами свяжется менеджер`} 
// else {
//   message = `На складе недостаточно товаров!`}

//   // Пиши код выше этой строки
//   return message;
// }


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
// const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = `Недостаточно средств на счету!`;}
//   else {
//     customerCredits -= totalPrice;
//     message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`;}
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(makeTransaction(5000, 10, 80000));

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
//   if (ordered === 0) {
//    message = `В заказе еще нет товаров`;}
//   else if (ordered > available) {
//    message = `Слишком большой заказ, на складе недостаточно товаров!`;}
//   else {
//    message = `Заказ оформлен, с вами свяжется менеджер`;} 

//   // Пиши код выше этой строки
//   return message;
// }

// function getExtremeElements(array) {
//     return [array[0], array[array.length -1]];
// }
// getExtremeElements(['Земля', 'Марс', 'Венера']);


// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки

//   return message.split(delimeter);

//   // Пиши код выше этой строки
//   return words;
// }
// splitMessage('Манго', '');
// splitMessage('Манго спешит на поезд', ' ');
// splitMessage('лучшее_за_неделю', '_');

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки

//   return message.split(' ').length * pricePerWord;

//   // Пиши код выше этой строки
// }
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));
// console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40));

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки

//  return array.join(delimeter);

//   // Пиши код выше этой строки
//   return string;
// }

// function slugify(title) {
//   // Пиши код ниже этой строки

//   return title.toLowerCase().split(' ').join('-');

//   // Пиши код выше этой строки
// }

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку

// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки

//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) { 
//   return newArray.slice(0, maxLength);}
//   else {
//     return newArray;}

//     // Пиши код выше этой строки
//   }

// console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Дополни эту строку
//   console.log(i);
// }

// function calculateTotal(number) {

//     let sum = 0;

//     for (let i = 0; i <= number; i += 1) {
//         sum += i;
//     }
//     return sum;
// }
// calculateTotal(3);
// calculateTotal(1);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
// for (let i = 0; i < order.length; i += 1) { 
//    total += order[i];
// }
//   // Пиши код выше этой строки
//   return total;
// }

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//  let words = string.split(' ');
//  let longestWord = words[0];

//   for(let word of words) {
//    if (word.length > longestWord.length) {
//      longestWord = word; }
//   } 
//   return longestWord;

//   // Пиши код выше этой строки
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   let j = min;
//   for (let i = 0; i <= max - min; i += 1) {
//         numbers.push(j);
//         j += 1;
//     }
//   // Пиши код выше этой строки
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
// const biggerNumbers =[];

// for (const number of numbers) {
//   if (number > value) {
// biggerNumbers.push(number);
// }
// }
//   return biggerNumbers;
//   // Пиши код выше этой строки
// }

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit); // Дополни эту строку
// }

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
// const commonNumbers = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       commonNumbers.push(array1[i]);
//     }
//   }
//   return commonNumbers;
//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); 
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// ЦИКЛ FOR
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Пиши код выше этой строки
//   return total;
// }

// ЦИКЛ FOR-OF
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (const item of order) {
//     total += item;
//   }

//   // Пиши код выше этой строки
//   return total;
// }

// ЦИКЛ FOR
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// ЦИКЛ FOR-OF

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// 5 % 1 = 0
// // 5, разделенное на 1, равно 5, а остаток - 0

// 5 % 2 = 1
// //  5, разделенное на 2, равно 2, а остаток - 1

// 5 % 3 = 2
// //  5, разделенное на 3, равно 1, а остаток - 2

// 5 % 4 = 1
// //  5, разделенное на 4, равно 1, а остаток - 1

// 5 % 5 = 0
// //  5, разделенное на 5, равно 1, а остаток - 0

// function getEvenNumbers(start, end) {
  //   // Пиши код ниже этой строки
  //   const evenNumbers = [];
  //   let j = start;

  //   for (let i = 0; i <= end - start; i += 1) {
  //     if (i % 2 === 0) {
  //       evenNumbers.push(j);
  //       j += 1;
  //     }
    
  //     return evenNumbers;
    
  //   }
  // }

// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//     const evenNumbers = [];
    
//     for (let i = start; i <= end; i += 1) {
//       if (i % 2 === 0) {
//         evenNumbers.push(i);
//       }
//     }
//   return evenNumbers;
    
//       // Пиши код выше этой строки
//   }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   // Пиши код выше этой строки
// }

// function includes(array, value) {
//   // Пиши код ниже этой строки

// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] === value) {
//     return true }
// }
//   return false;
//   // Пиши код выше этой строки
// }
// console.log(includes([1, 2, 3, 4, 5], 3));