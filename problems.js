// const perf = require('execution-time')();

// #1.
// const isSumZero = (arr) => {
//   console.log(arr.length);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(isSumZero([1, 2, 3]));
// RUNTIME COMPLEXITY: O^2
// SPACE COMPLEXITY: Quadratic

// #2.
// const hasUniqueChars = (str) => {
//   let charMap = {};
//   str = str.toLowerCase();
//   for (let char of str) {
//     if (!charMap[char]) {
//       charMap[char] = 1;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(hasUniqueChars('Monday'));
// RUNTIME COMPLEXITY: O^2... initially thought O(1)
// but I believe check on charMap[char] exists is
// basically equivalent of another for loop
// SPACE COMPLEXITY: Quadratic

// NOTE: getSizedStr(size) is to check #3
// function getSizedStr(size) {
//   let str = '';
//   for (let i = 0; i < size; i++) {
//     str += 'a bc ';
//   }
//   return str;
// }

// let big = getSizedStr(10000);
// console.log(big);

// #3.
// const isPangramPersonal = (str) => {
//   // O(n)
//   let counter = 0;
//   const notAlpha = /[^a-z]/g;
//   str = str.toLowerCase();
//   str = str.replace(notAlpha, '');
//   let charMap = {};
//   for (let char of str) {
//     if (!charMap[char]) {
//       charMap[char] = 1;
//       counter++;
//     }
//     if (counter === 26) {
//       return true;
//     }
//   }
//   return false;
// };
// O^2

// function isPangramWeb(string) {
//   let strArr = string.toLowerCase();
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

//   for (let i = 0; i < alphabet.length; i++) {
//     if (strArr.indexOf(alphabet[i]) < 0) {
//       return false;
//     }
//   }
//   return true;
// }

// Here, I was testing both solutions to see which
// is faster. My "personal" is slower. This is in
// truth how I realized that hasUniqueChars was an O^2.
// And mine has some unnecessary logic route, whereas
// the second one is a simpler check function.
// RUNTIME COMPLEXITY: O^2
// SPACE: Quadratic

// perf.start();
// console.log(isPangramPersonal(big), '1');
// let test = perf.stop().preciseWords;
// console.log(test);

// #4.
// const findLongestWord = (arr) => {
//   let longest = arr[0].length;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > longest) {
//       longest = arr[i].length;
//     }
//   }
//   return longest;
// };

console.log(findLongestWord(['hi', 'hello', 'bye']));
// RUNTIME COMPLEXITY: O^2? every time the check on
// arr[i].length is like a loop, an upticking counter
// for every element, if I'm not mistaken...
// SPACE: Quadratic
