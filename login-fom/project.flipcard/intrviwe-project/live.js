// // mul3or5(25) -> true
// // mul3or5(17) -> false
// // mul3or5(18) -> true


// function mul3or5(number) {
//     return number % 3 === 0 ||
//         number % 5 === 0
// }
// console.log(mul3or5(17));

// // 2. Design a function specialSum which takes a number n and adds all the numbers upto n which are
// // multiples of either 3 or 5.
// function specialSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;

//         }

//     }
//     return sum;
// }
// console.log(specialSum(10));

// function checknum(num){

// }
// unction matchHouses(steps) {
//     let matchsticks = (steps * 5) + 1;
//     return matchsticks;
//   }

//   console.log(matchHouses(1));
//   console.log(matchHouses(2));
//   console.log(matchHouses(4));

// //   2. Design a function minMax which takes an array of numbers and returns both the minimum and
// // maximum numbers in the array.
// // Example tests:
// // minMax([1,2,3,4,5]) -> [1,5]
// // minMax([8,9,4,16,7]) -> [4,16]

// function minMax(numbers) {
//     numbers.sort(function(a, b) {
//       return a - b;
//     });

//     const min = numbers[0];
//     const max = numbers[numbers.length - 1];

//     return [min, max];
//   }

//   console.log(minMax([1,3,7,8,2]))

//   const myObject = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

//   for (let key in myObject) {
//     console.log(key); 78
//   }
// Write a JavaScript function that determines if a given year is a leap year
// (divisible by 4 and not divisible by 100, or divisible by 400).
0

// "Write a JavaScript function that determines the grade (A, B, C, D, or F) based on a numerical score as follows:
// marks > 90 => A
// 90 > marks > 80 => B
// 80 > marks > 70 => C
// 70 > marks > 60 => D
// marks < 60 => F"
//  function calculateGrade(score) {
//     if (score > 90) {
//       return "A";
//     } else if (score > 80) {
//       return "B";
//     } else if (score > 70) {
//       return "C";
//     } else if (score > 60) {
//       return "D";
//     } else {
//       return "F";
//     }
//   }


//   const marks = 75;
//   const grade = calculateGrade(marks);
//   console.log(`Your grade is: ${grade}`);

// //   (2) Write a JavaScript function that determines if a given year is a leap year
// // (divisible by 4 and not divisible by 100, or divisible by 400).
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   function grade(score){
//     if(score >90){

//     }
//     return "A"
//   }

function calculateGrade(score) {
  if (score > 90) return "A";
  if (score > 80) return "B";
  if (score > 70) return "C";
  if (score > 60) return "D";
  return "F";
}
console.log(calculateGrade(75))

// (2)Write a JavaScript function that determines if a given year is a leap year
//  (divisible by 4 and not divisible by 100, or divisible by 400).
// var year = 2023;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }

//   function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// console.log()
// function checkNumber(num) {
//   if (num > 0) {
//     return "Positive";
//   } else if (num < 0) {
//     return "Negative";
//   } else {
//     return "Zero";
//   }
// }

// function isPalindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// console.log(isLeapYear(2024)); // true
// console.log(checkNumber(-5)); // Negative
// console.log(isPalindrome("aba")); // true

// function countVowels(str) {
//    return str.match(/[aeiouAEIOU]/g).length;
//  }
//  function countVowels(str) {
//   return str.match(/[aeiouAEIOU]/g).length;
// }
// console.log()



// function plural(word) {
//   if (word.endsWith("y")) {
//     return word.slice(0, -1) + "ies";
//   } else {
//     return word + "s";
//   }
// }

// function add(a, b) {
//   return a + b;
// }
// Print Numbers from 1 to N:
// javascript
// Copy code
// function print(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }

// Print Odd Numbers from 1 to N:
// javascript
// Copy code
// function printOdd(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }


// function isVowel(char) {
//   return /[aeiouAEIOU]/.test(char);
// }

// function findLargestElement(arr) {
//   return Math.max(...arr);
// }

// function sum(n) {
//   return (n * (n + 1)) / 2;
// }

// function isEvenOrOdd(num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// }


// function greetPerson(person) {
//   return `Hello, ${person.name} from ${person.city}!`;
// }


// function fizzBuzz() {
//   for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// Sum of Numbers Divisible by 3 in an Array:
// javascript
// Copy code
// function sumDivisibleBy3(arr) {
//   return arr.reduce((sum, num) => (num % 3 === 0 ? sum + num : sum), 0);
// }

// function findMostExpensiveProduct(products) {
//   let mostExpensive = products[0];
//   for (let i = 1; i < products.length; i++) {
//     if (products[i].price > mostExpensive.price) {
//       mostExpensive = products[i];
//     }
//   }
//   return mostExpensive.name;
// }



// "Write a JavaScript function that determines the grade (A, B, C, D, or F) based on a numerical score as follows:
// marks > 90 => A
// 90 > marks > 80 => B
// 80 > marks > 70 => C
// 70 > marks > 60 => D
// marks < 60 => F"
// function grade (score){
//   if (score > 90 ) return "A";
//   if (score > 80 ) return "B";
//   if (score > 70 ) return "C";
//   if (score > 90 ) return "D";
//   return "f"
// }
// console.log(grade(75))

// Write a JavaScript function that determines if a given year is a leap year
// (divisible by 4 and not divisible by 100, or divisible by 400).
// function leapyear(year){
//   if(year% 4 === 0 && year% 100 !==0 || year % 400===0){
//     return true
//   }
//   else{
//     return false

//   }
// }
// console.log(leapyear(2024))

// "Write a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards), for example:
// isPalindrome(""aba"") => true (""aba"" backwards is also ""aba"")
// isPalindrome(""abab"") => false (""abab"" backwards is ""baba"")"
// function isPalindrome(str) {
//   const cleanStr = str.replace('').toLowerCase();
//   return cleanStr === cleanStr.split('').reverse().join('');
// }
// console.log(isPalindrome("aba"));  // true
// console.log(isPalindrome("abab")); // false

// function isPalindrome(str){
// const cleanStr = str .replace (" ") .toLowerCase();
// return cleanStr === cleanStr.split("").reverse().joint("");
// }

// console.log(isPalindrome("aba"));  // true
// console.log(isPalindrome("abab")); // false

// Write a JavaScript function that counts the number of vowels (a, e, i, o, u) in a given string.
function findSmallestNumber(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}


const numbers = [5, 2, 9, 1, 5, 6];

// function findSmallestNumber(arr) {
//   if (arr.length === 0) {
//     return "Array is empty";
//   }

//   let smallest = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }

//   return smallest;
// }

// const numbers = [5, 2, 9, 1, 5, 6];
// const smallestNumber = findSmallestNumber(numbers);

// console.log("Sabse chota number:", smallestNumber);

// function findsmallestNumber(arr){
//   if(arr.length===0){
//     return "Array is empty";

// }
// let smallest = arr[0]
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < smallest) {
//     smallest = arr[i];
//   }
// }
// return smallest;
// }
// const numbers = [2,3,1,5,4,6]
// console.log(smallestNumber);


// A function that generates a random password consisting of letters and numbers of a specified length:
// javascript
// Copy code
// function generatePassword(n) {
//   const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   let password = "";

//   for (let i = 0; i < n; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length);
//     password += charset[randomIndex];
//   }

//   return password;
// }
// function sumNumbersDivisibleBy3(numbers) {
//   // Initialize a variable to keep track of the sum
//   let sum = 0;

//   // Iterate through the array
//   for (let i = 0; i < numbers.length; i++) {
//     // Check if the current number is divisible by 3
//     if (numbers[i] % 3 === 0) {
//       // If it is divisible by 3, add it to the sum
//       sum += numbers[i];
//     }
//   }

//   // Return the sum of numbers divisible by 3
//   return sum;
// }

// // Example usage:
// const numbers = [9, 6, 12, 7, 15, 4, 18];
// const result = sumNumbersDivisibleBy3(numbers);
// console.log("Sum of numbers divisible by 3:", result);
// function findSmallestNumber(arr) {
//     if (arr.length === 0) {
//       return "";
//     }

//     let smallest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < smallest) {
//         smallest = arr[i];
//       }
//     }

//     return smallest;
//   }

//   const numbers = [5, 2, 9, 1, 5, 6];
//   const smallestNumber = findSmallestNumber(numbers);

//   console.log("Sabse chota number:", smallestNumber);
// function findLargestNumber(arr) {
//   if (arr.length === 0) {
//     return "Array is empty";
//   }

//   let largest = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// const numbers = [5, 2, 9, 1, 5, 6];
// const largestNumber = findLargestNumber(numbers);

// console.log("Sabse bada number:", largestNumber);





// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 5)); // Output: 8

// function print(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }
// print(5); // Output: 1, 2, 3, 4, 5
//
// function printOdd(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }




// function isVowel(char) {
//   return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
// }
// console.log(isVowel('a')); // Output: true

// function findLargestElement(arr) {
//   return Math.max(...arr);
// }
// console.log(findLargestElement([3, 7, 2, 9, 5])); // Output: 9
// Function to calculate the sum of all numbers from 1 to n:
// javascript
// Copy code
// function sum(n) {
//   return (n * (n + 1)) / 2;
// }
// console.log(sum(5)); // Output: 15
// Function to check if a number is even or odd:
// javascript
// Copy code
// function isEvenOrOdd(num) {
//   return num % 2 === 0 ? 'Even' : 'Odd';
// }
// console.log(isEvenOrOdd(7)); // Output: Odd



// 8. Function to print a person's information:
// ```javascript
// function greetPerson(person) {
//   console.log(`Hello, ${person.name} from ${person.city}!`);
// }
// const personInfo = { name: 'Alice', city: 'New York' };
// greetPerson(personInfo); // Output: Hello, Alice from New York!
// Program to print Fizz, Buzz, or FizzBuzz for numbers from 1 to 20:
// javascript
// Copy code
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }


function print(n) {
  for (let i = 1; i => 5; i++) {
  }
}
console.log(print);
