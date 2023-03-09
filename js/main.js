// 01 Write a javascript program that accepts two intergers and display the larger 
// var num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");
                                                 
// if(num1 > num2)
//   { 
//   console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(num2 > num1) 
//   {
//   console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }
  

//   2-Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign 

// var a = 0;
// var b = 0;
// var c = 0;

// a = window.prompt("input the First Number", "0");
// b = window.prompt("input the second Number", "0");
// c = window.prompt("input the third Number", "0");


// if(a > 0 && b > 0 && c > 0) { 
//   alert("The sign is +");
//    }   
//    else if (a < 0 && b < 0 && c < 0)
//    {
//        alert("The Sign is -")
//    } 
//    else if(a < 0 && b > 0 && c < 0)
//    {
//       alert("The Sign Is +")
//    }
//    else
//    {
//        "The sign Is -"
//    }


// 3. Write A javascript conditional statement to sort three numbers.display an alert box to show 

// let a = 0;
// let b = 0;
// let c = 0;

// a = window.prompt("Enter The First Number");
// b = window.prompt("Enter The Second Number");
// c = window.prompt("Enter The Third Number");

// let result = [a,b,c];
// alert(result.reverse());



// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. 

// let a = window.prompt("Enter First Number");
// let b = window.prompt("Enter Second Number");
// let c = window.prompt("Enter Third Number");
// let d = window.prompt("Enter Forth Number");
// let e = window.prompt("Enter Fifth Number");


// if(a > b && a > c && a > d && a > e )
// {
//     alert(a + " Is Greater Than All")
// }
// else if (b > a && b > c && b > d && b > e )
// {
//     alert(b + " Is Greater Than All")
// }
// else if (c > a && c > b && c > d && c > e)
// {
//     alert(c +  " Is Greater Than All")
// }
// else if (d > a && d > b && d > d && d > c && d > e)
// {
//     alert(d + " Is Greater Than All")
// }
// else if (e > a && e > b && e > c && e > d){
//     alert(e + " Is Greater Than All")
// }


// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration.
// it will check if the current number is odd or even, and display a message to the screen.

// for (var x = 0; x <= 15; x++) {
//     if (x === 0) {
//             console.log(x +  " is even");
//     }
//     else if (x % 2 === 0) {
//             console.log(x + " is even");   
//     }
//     else {
//             console.log(x + " is odd");
//     }
// }


// 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

// var students = [['Harry', 80], ['Potter', 77], ['Jermy', 88], ['Berstain', 95], ['Thomas', 68]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }
// console.log("Average grade: " + (Avgmarks)/students.length);

//         if (avg < 60){
//           console.log("Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
//                   } 
//         else if (avg < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A"); 
// };


// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// for ( var i = 1; i <= 100; i++ )
// {
//   if ( i%3 === 0 && i%5 === 0 )
//   {
//     console.log( i + " FizzBuzz" );
//   }
//   else if ( i%3 === 0 ) 
//   {
//     console.log(i+ " Fizz" );
//   }
//   else if ( i%5 === 0 ) 
//   {
//     console.log(i+ " Buzz" );
//   }
//   else
//   {
//     console.log(i);
//   }
// };



// Q-8 is Pending 

// 8 Reversing & Sorting Method According to Wikipedia a happy number is defined by the following process :
// and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers,
// while those that do not end in 1 are unhappy numbers (or sad numbers)".
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, 
// Write a JavaScript program to find and print the first 5 happy numbers.

// function happy_number(num) 
// {
//     var m, n ;
//     var c = [] ;
 
//     while(num != 1 && c[num] !== true) 
//     {
//         c[num] = true ;
//         m = 0 ;
//         while (num > 0) {
//             n = num % 10 ;
//             m += n * n ;
//             num = (num  - n) / 10 ;
//         }
//         num = m ;
//     }
//     return (num == 1) ;
// }
 
// var cnt = 5;
// var num = 1;
// var f5 = ''; 
// while(cnt-- > 0) 
// {
//     while(!happy_number(num))
//         num++ ;
// f5 = f5+(num + ", ") ;

//     num++ ;
// }
// console.log('First 5 happy numbers are : ' + f5);



// 9.Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

// function three_digit_armstrong_number() 
// {
//  for (var i = 1; i < 10; ++i) 
//  {
//    for (var j = 0; j < 10; ++j) 
//      {
//         for (var k = 0; k < 10; ++k)
//         {
//           var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
//           var plus = (i * 100 + j * 10 +  k);
//           if (pow == plus) 
//            {     
//              console.log(pow);
//             }
//          }
//        }
//     }
//   }
// three_digit_armstrong_number();  


// 10.Find a program to find the percentage of a student.
// Total marks in each subject are 100 whereas the student follwing marks are 
// English:59.
// Urdu:65
// Maths:74,
// Chemistry:60
// Physics:60
// Computer:85,


// let totalMarks = 100;
// let obtMarks = [
//     "Maths" : "80",
//     "Urdu" : "65",
//     "Science" : "74",
//     "Chemistry" : "60",
//     "Physics" : "60",
//     "Computer" : "85"
// ]
// let StudentMark = parseInt(obtMarks.Maths + obtMarks.Urdu + obtMarks.Science + obtMarks.Chemistry + obtMarks.Physics + obtMarks.Computer);

// console.log(StudentMark)




// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits)

// Use Strict 

// "use strict";
// let x = 3.14;  
// console.log(x)


// "use strict";
// let x = 3.14;
// delete x;    

// Exponent
// let x = 5
// console.log(x ** 3)

// when i becomes 0, the condition becomes falsy, and the loop stops
// let i = 50;
// while (i) { 
//   alert(i);
//   i--;
// }

// LOGICAL OPERATORS 

// let hour = 12;

// if (hour < 10 || hour > 18) {
//   alert( 'The office is closed.' );
// }else{
//     alert('We, re OPEN')
// }



// let hour = 18;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'The office is closed.' ); // it is the weekend
// }else{
//     alert('WE,RE OPEN :')
// }


// let a = window.prompt("Hey THere TYpe Number")

// function ShowMessage() {
//   if(a == 10){
//     alert("Hello World!");
//   }else if(a == 11){
//      alert("Overaged Bitch")
//   }else if(a == 15 ){
//    alert("We Can Talk With More Money")
//   }
//   else{
//     alert("You Are A Robot Bitch")
//   }
  
// }

// ShowMessage();

// function ShowMessage(firstName, lastName) {
//   alert("Hello " + firstName + " " + lastName);
// }

// ShowMessage("Steve", "Jobs");
// ShowMessage("Bill", "Gates");
// ShowMessage(100, 200);


// Global Scope 

// var userName = "Bill";

// function modifyUserName() {
//         userName = "Steve";
//     };

// function showUserName() {
//         alert(userName);
//     };

// alert(userName); // display Bill

// modifyUserName();
// showUserName();// display Steve

// let stuNames = ["Aliyan" ,"Tanveer", "Burong", "Davist"]

// for(i = 0; i <= 4; i++){
//   console.log(i + stuNames[0])
//   console.log(i + stuNames[1])
//   console.log(i + stuNames[2])
//   console.log(i + stuNames[3])
// }



// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }


// let a = window.prompt('What Would You Buy')

// switch(a){
//   case 'orange':
//     alert("Oranges are Rs100 per Kilo")
//     break;
//     case 'banana':
//     alert('Bananas Are Rs120 per kilo ')
//     break;
// }

// Switch And Case 

// let a = 1 + 2;
// let  b = 1 + 2;
// switch(a + b){
//  case 1 :
//   alert('Too small');
//   break;
//   case 2:
//     alert('Normal')
//     break;
//     case 3:
//     alert('Fit')
//     break;
//     case 4:
//     alert('OverWeight')
//     break;
//     default:
//       alert("None of THese")

// }



// const myData = document.getElementById('div');
// myData.innerHTML = `<div class="element">Hi There</div>`

// Write a programe to assingn Color annd Model of a bike to an object;

// function makeBike(color,model){

//     let tempObj = 
//     {"color" : color,
//      "model" : model}
//      return tempObj
// }
// let myBike = makeBike("red","99")
// let hisBike = makeBike("Green","22")
// let spBike = makeBike("Black","96")
// console.log(myBike)
// console.log(hisBike)
// console.log(spBike)


    //  Tasks To do 

// Wrie A Program to find factorial of a Number

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }
//     else if(n > 1){
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }
//     else{
//       return "number has to be positive."
//     }  
//   }


//   let n = window.prompt("Enter Your Number");
//   answer = factorial(n)
//   alert("Factorial of " + n + " is " + answer);



// write a program that read set of integers and return sum of odd numbers ,sum of even numbers 

// Function to calculate sum


 



// write a programe to find HCF of two Integers 

// take 10 integers from keyboard and find the average of all 




// Write A Programe to print pattern 

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********



// function myMessage() {
//   console.log('Message')

// }
// myMessage()


// function add(a, b){
//   console.log(a + b)
// }
// add(1,2)
// add(2,2)
// add(4,5)
// add(10,10)


// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }


// Syntax
// array.join(separator)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join(" and ");

// console.log(text);


// let sum = (a,b) => {
//   let add = a +b;
//   return add;
// }
// const result = sum(1,2)
// const resultTwo = sum(10,10)
// console.log(resultTwo)





// const urdu = window.prompt("Enter Obtained Marks")
// const maths = window.prompt("Enter Obtained Marks")
// const islamiat = window.prompt("Enter Obtained Marks")
// const computer = window.prompt("Enter Obtained Marks")
// const statistics = window.prompt("Enter Obtained Marks")

// let totalMarks = urdu + maths + islamiat + computer + statistics;

// console.log(totalMarks)



// function sayHi() {
//     alert( "Hello" );
//   }
// sayHi()

// function sayHi() {
//     alert( "Hello" );
//   }
  
//   alert( sayHi );


// function myFunc(a,b){
//     return a * b
// }

// // myFunc()
// console.log(myFunc(4,2))


// CreatinnG AN aRRAY with New Array 
// let myFavoriteFoods = new Array("pizza", "ice cream", "salad");

// console.log(myFavoriteFoods);
// console.log(myFavoriteFoods.length);
// console.log(myFavoriteFoods[1])


// Craeting An Array with Array.of 

// Array.of(); 

// let myFavoriteFoods = Array.of("pizza", "ice cream", "salad");

// console.log(myFavoriteFoods); 
// console.log(myFavoriteFoods.length);
// console.log(myFavoriteFoods[1]); 


// let myArry = Array.of(4);
// console.log(myArry)

// Creating aN Object With new Object() 
//   TOO MUCH WRITING
// const person = new Object();

// person.firstName = 'testFirstName';
// person.lastName = 'testLastName';

// console.log(person)


// Simpple Easy Writting 

// function Person(Tanveer, Ahmed) {
//     this.firstName = Tanveer;
//     this.lastName = Ahmed;
//   }


// const personOne = new Person('testFirstNameOne', 'testLastNameOne');
// const personTwo = new Person('testFirstNameTwo', 'testLastNameTwo');

// const orgObject = { company: 'ABC Corp' };

// const employee = Object.create(orgObject, { name: { value: 'EmployeeOne' } });

// console.log(orgObject); // { company: "ABC Corp" }

// console.log(x);
// var x=5;
// console.log(x);

// console.log(x);
// let x=5;
// console.log(x);



    // // calling x after definition
    // var x = 5;
    // document.write(x, "\n");
     
    // // calling y after definition
    // let y = 10;
    // document.write(y, "\n");
     
    // // calling var z before definition will return undefined
    // document.write(z, "\n");
    // var z = 2;
     
    // // calling let a before definition will give error
    // document.write(a);
    // let a = 3;

// let x = 1 
// while(x >= 12 ){
//     x++
//     console.log(x)
    
// }

// let i = 1;
// const n = 5;

// // do...while loop from 1 to 5
// do {
//     console.log(i);
//     i++;
// } while(i <= n);    

// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

// let sum = 0;

// // take input from the user
// let number = parseInt(prompt('Enter a number: '));

// while(number >= 0) {

//     // add all positive numbers
//     sum += number;

//     // take input again if the number is positive
//     number = parseInt(prompt('Enter a number: '));
// }

// // display the sum
// console.log(`The sum is ${sum}.`);

// let hour = new Date().getHours();
// if (hour < 20) {
//   document.getElementById("demo").innerHTML = "Good day";
// }


// const action = 'say_hello';
// switch (action) {
//   case 'say_hello': { // added brackets
//     const message = 'hello';
//     console.log(message);
//     break;
//   } // added brackets
//   case 'say_hi': { // added brackets
//     const message = 'hi';
//     console.log(message);
//     break;
//   } // added brackets
//   default: { // added brackets
//     console.log('Empty action received.');
//   } // added brackets
// }


// You can also use the spread operator in function calls and in object literals.
// function sum(a, b, c) {
//     return a + b + c;
//   }


//   let nums = [1, 2, 3];
//   console.log(sum(...nums)); // 6


  
//   let obj1 = { Name: "Tanveer" };
//   let obj2 = { Age: 22 };
//   let obj3 = { ...obj1, ...obj2 };
//   console.log(obj3); 



// Rest Operator 

// function sum(...args) {
//     let total = 0;
//     for (let arg of args) {
//       total += arg;
//     }
//     return total;
//   }
//   console.log(sum(1, 2, 3)); // 6
//   console.log(sum(1, 2, 3, 4, 5)); // 15
  


// how To Use .map Method 

// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map(num => num * 2);

// console.log(doubleNumbers)

// Using Map with Objects 


// const users = [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 25 },
//   { name: 'Jim', age: 35 }
// ];
// const names = users.map(user => user.name);

// console.log(names)


// Filter Method  with Arrays
// const users = [
//   { name: 'John', age: 17 },
//   { name: 'Jane', age: 25 },
//   { name: 'Jim', age: 35 }
// ];
// const adultUsers = users.filter(user => user.age >= 18);

// console.log(adultUsers)



// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum)


// const users = [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 25 },
//   { name: 'Jim', age: 35 }
// ];
// const totalAge = users.reduce((acc, user) => acc + user.age, 0);


// function makeMystery(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log('Congrats You win a Million dollar')
//         }
//     }else{
//         return function(){
//             alert('Stop Closing Windows')
//             alert('You are Infected By A virus')
//             alert('Stop Closing Windows')
//             alert('Stop Closing Windows')
//             alert('Stop Closing Windows')
//         }
//     }
// }

// const mystery = makeMystery();
// mystery()



// const movies = [
//     { Title: "Amadeus", 
//       Score: 95
//      },

//       { Title: "Scorpion", 
//       Score: 95
//      },

//       { Title: "Violent Night", 
//       Score: 95
//        },

//       { Title: "Enforcer", 
//       Score: 95
//        },

//       { Title: "Transformers", 
//       Score: 95
//       }
    
// ]
// let passIn = movies.map(function(movie){
//     console.log(`${movie.Title}  ${movie.Score}/100`)
// })

// I want to Print table of Two Using Map 

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// let TableOfTwo = numbers.map(function(number){
    
//     document.write(`120 x ${number} = ${120 * number}<br><br>`)
// }) 

// console.log('%c This text is larger', 'font-size:20px;'



// const nums = [1,2,3,4,5,6,7,8,9,10]

// const TableOfTwo = nums.forEach((num) => {
//    document.write(`2 x ${num} = ${2 * num}<br><br>`)
// })


// function myFunc(x,y){
//     return x + y;
// }(1,2)


// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);


// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // Expected output: "FireAirWater"

// console.log(elements.join('-'));
// // Expected output: "Fire-Air-Wate



// function myfunc(){
//     console.log(abc)
//     function funcTwo(){
//         function funcThree(){
//             const abc = 10
//         }
//     }
// }
// myfunc()



// function addNumber(a,b){
//     console.log(a + b)
// }
// addNumber(10,4)





















































