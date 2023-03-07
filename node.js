// 1. Ways to print in JS
//console.log("Hello World!");
//alert("me"); 
//document.write("this is document write.")

// 2.JS Console API  
//console.log("Hello World!", 4 + 6, "Another log");
//console.warn("Srijan is a warning.")
//console funtions
//console.clear() - to clear console in browser.
//console.assert(something = something) - to assert something
// eg. console.assert(4==(6-2))
//console.error("This is an error.")

//3.JS variables
/*var num1 = 34;
var num2 = 36;
console.log(num1 + num2);*/

//4. Data types in JavaScript
//1. string
var str1 = "This is a string";
var str2 = "This is alos a string";
//2. number - same as above
//3. objects, Key-Value Pair
var marks = {
    john: 66,
    harry: 34.4,
    srijan: 99
}
//console.log(marks);
//4. Boolean
var a = true;
var b = false;
//console.log(a) or (a,b)

//5. undefined
var sri // will give undefined, since value is not given.
//console.log(sri);

//6. NULL
var ary = null

/*  At high level, there are 2 data types in JS i.e Primitive and 
    reference data types.
    Primitive data types - Pure and hasn't been derived from other data types, i.e undefined, null, numbers, string, boolean, symbol.
    Reference data types- Has been derived from other data types i.e Arrays and Objects
    */
//note: symbol: Everytime generates new value.

//7. Array
var arr = [1, 2, 'my_string', 4, 5]

//Operators in JavaScript

//1. Arithemetic Operators
var a = 34;
var b = 56;

//console.log("The value is =", a*b); // +, -, *, /

//2. Assignment Operators (=)
var c = b;
c += 10 //ans: 66, // -=, *=, /=, all will work
//console.log(c)

//3. Comparision Operator
var x = 10
var y = 20
//console.log(x >= y) //ans: False // ==, <=, >, < will work

//Logical Operators.
// && - AND operator
//console.log(true && true)
//console.log(true && false) //f&&f, f&&t

// Similarly, || - OR operator

// logical NOT operator
//console.log(!true)

//JS funtions
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = avg(5, 10)
c2 = avg(20, 40)
//console.log(c1, c2);

//Conditions in JS
/*var age = 34;
//if only
if(age<30){
    console.log("Do what ever you want.")
}

//if else 
if (age > 8){
    console.log("Grandfather")
}
else{
    console.log("Kiddo")
}

//if-else ladder
if(age >2){
    console.log("You are not a kid")
}
else if(age >56){
    console.log("You are adult")
}
else if(age >45){
    console.log("Man")
}
else{
    console.log("Human being")
} */


//LOOPS  IN JS
//FOR loop
var arr = ['ram', 'laxamn', 'sita', 'ravan'];
for (var i = 0; i < arr.length; i++) {
    if(i==2){
        //break; // break the loop
        //continue; // forget and move on
    }
     //console.log(arr[i])
}
//one more way
arr.forEach(function (element) {
    //console.log(element);
})

//WHILE LOOP
let j = 0;
//**note**: let has greater scope than var, var inside funtion have limitation but let dont
const ac = 10; // once deaclared cant be changed
// ac++, ac= ac+30 etc wont work
let vari = 0;
/*while(vari<arr.length){
 //   console.log(arr[vari])
    vari ++;
}*/

//DO WHILE
/*do{
  //  console.log(arr[vari])
    vari ++
} while (vari < arr.length);
*/
//BREAK AND CONTINUE

let myarr = ['dell', 'hp', 44, true];
// Array Methods
/*console.log(myarr.length)
myarr.pop()//will take out last element
myarr.push("srijan"); //will push an elemnt
myarr.shift() //will remove first element
const newlen = myarr.unshift("dell")
console.log(myarr)*/

//String Methonds
let mystr = "Srijan is good nice good";
//console.log(mystr.length)
//console.log(mystr.indexOf("good"))
//console.log(mystr.lastIndexOf("good"))

//console.log(mystr.slice(0,3)) // will take from 0 to 2(3-1)
d = mystr.replace("Srijan","Harry");
//console.log(d, mystr)

//JS Dates
/*mydate = new Date();
console.log(mydate);
console.log(mydate.getTime()); //IN seconds
console.log(mydate.getFullYear()); //in year
console.log(mydate.getDay()); //sun - 0, mon - 1, tues - 2 so on
console.log(mydate.getMinutes()); //for minutes
console.log(mydate.getHours());*/

//Dom Manupulation
//IN CONSOLE OF BROWSER
//document
//document.location
