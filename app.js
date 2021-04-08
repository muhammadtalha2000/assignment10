//CHAPTER 17-20

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var arr = [[],[],[]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var arr1 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(arr1[0] + "<br>" + arr1[1] + "<br>" + arr1[2] + "<br>")

// 3. Write a program to print numeric counting from 1 to 10.

// var count = 11;
// for (var i = 0; i < count ; i++){
//     document.write(i + "<br>")
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var number = +prompt("Enter a number...")
// var  lenght = +prompt("Enter table's length...")

// for(var i = 1; i <= lenght ; i++) {

//     var result = i * number;

//     document.write(number +  " " + "x"+ " " + i + " " + "=" + " " + result + "<br>" );
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits = ["apple","banana","mango","orange","strawberry"];
// document.write(fruits[0] + "<br>" + fruits[1] + "<br>" + fruits[2] + "<br>" + fruits[3] + "<br>" + fruits[4] + "<br>" + "<br>")

// document.write("Element at index 0 is" +  " " + fruits[0] +  "<br>" +
// "Element at index 1 is" +  " " + fruits[1] + "<br>" +
// "Element at index 2 is" +  " " + fruits[2] + "<br>" +
// "Element at index 3 is" +  " " + fruits[3] + "<br>" +
// "Element at index 4 is" +  " " + fruits[4] + "<br>" 
// )

// 6. Generate the following series in your browser. See
// example output.

// document.write("Counting :" + "<br>")
// var counting = 16;
// for(var i = 0; i < counting ; i++){
//     document.write( i + "<br>")
// }


// document.write(" Reverse Counting :" + "<br>")
// var counting1 = 0;

// for (i = 10; i > counting1; i--){
//     document.write(i + "<br>");
//   }

// document.write("Even :" + "<br>")
// var even = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12 , 13, 14, 15, 16, 17, 18, 19, 20];

// for (var i = 0; i < even.length; i++) {
//     if (even[i] % 2 === 0) {
//         document.write(even[i] + "<br />");
//     }
// }

// document.write("Odd :" + "<br>")
// var odd = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12 , 13, 14, 15, 16, 17, 18, 19, 20];

// for(var i = 0 ; i < odd.length ; i++){
//     if(odd[i] % 2 !== 0){
//         document.write(odd[i] + "<br>")
//     }
// }


// document.write("Series :" + "<br>")
// var even = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12 , 13, 14, 15, 16, 17, 18, 19, 20];

// for (var i = 0; i < even.length; i++) {
//     if (even[i] % 2 === 0) {
//         document.write(even[i] + "k" + "<br />");
//     }
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var bakery = ["cake","apple  pie","cookie","chips","patties"]
// var user = prompt("What do you want to order?");
// var fil = bakery.filter(function(user){
//     return user
// })
// if(user >= bakery){
// document.write(user + " " +  " is at index number of"  + " " + bakery.indexOf(user))
// }
// else{
//     document.write(user + " " + "is not available...")
// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var arr_max = [24, 53, 78, 91, 12];

// document.write("The largest number is" + " " + (Math.max(...arr_max)));

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

//  var arr_min = [24, 53, 78, 91, 12];

// document.write("The Smallest number is" + " " + (Math.min(...arr_min)));

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for(var i = 1; i < 21 ; i++) {

//         var result = i*5;

//         document.write(result + "<br>");
//      }

//CHAPTER # 21 -25

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstname = prompt (" Enter your first name");
// var lastname = prompt (" Enter your last name");
// var fullname = (firstname + " " +  lastname);
// alert ("Welcome" + " " + fullname ) 

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mobile = prompt ("Enter your favorite mobile");
// document.write ("My favorite phone is" + " " + mobile + "<br>");
// var length = (mobile.length);
// document.write ("Length of string:" + length + " " + "<br>");

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// var nation = ("Pakistani");
// document.write ("String:" + " " + nation + "<br>")
// var ind = (nation.indexOf ("n"));
// document.write ("Index of 'n' :" + " " +  ind + "<br>");

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var greet = ("Hello World");
// document.write ("String:" + "  " + greet + "<br>")
// var lastind = (greet.lastIndexOf ("l")) 
// document.write ("Last index of 'l':" + " " + lastind + "<br>")

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var country = ("Pakistani");
// document.write ("String :"  + " " + country + "<br>")
// var charac = (country.charAt(3))
// document.write ("Character at index 3:" + " " + charac + "<br>")

// 6. Repeat Q1 using string concat() method.

// var firstName = "Talha";
// var lastName = " Godil";
// var fullName = firstName.concat(lastName);
// document.write("Welcome!" + " " + fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// var city = ("Hyderabad")
// document.write ("City :" + " " + city + "<br>")
// var replacecity = city.replace ("Hyder", "Islam")
// document.write ("After replacement: " + " " + replacecity + "<br>")

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

//  var message = "Ali and Sami are best friends. They play cricket and football together.";
//  document.write ("Paragraph :" + " " + message + "<br>")
// var replacemessage = message.replace (/and/g, "&")
// document.write ("Paragraph after replacement:" + " " + replacemessage + "<br>")

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var a = "472";
// document.write("Value :" + " " + a + "<br>")
// var b =  typeof(a);
// document.write("Type :" + " " + b + "<br>")
// var c = 472;
// document.write("Value :" + " " + c + "<br>")
// var d =  typeof(c);
// document.write("Type :" + " " + d + "<br>")

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var user_input = prompt("Enter any text...")
// document.write("Input :" + " " + user_input + "<br>")
// var convert = user_input.toUpperCase()
// document.write("Upper Case :" + " " + convert + "<br>")

// 11. Write a program that takes user input. Convert and
// show the input in title case.

var input = prompt("Enter any text...")

