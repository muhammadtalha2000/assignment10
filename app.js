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
// var even = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

// for (var i = 0; i < even.length; i++) {
//     if (even[i] % 2 === 0) {
//         document.write(even[i] + "<br />");
//     }
// }