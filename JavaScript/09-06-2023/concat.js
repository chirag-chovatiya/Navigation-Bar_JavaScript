document.write("<h1>Concat-Method</h1>");

let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];

let ans = num1.concat(num2);
document.write(ans + "<br>");


let strings = ["Jay", "yash"];
let strings2 = ["Nayan", "rushabh"];

let ans1 = strings.concat(strings2);
document.write(ans1 + "<br>");



document.write("<h1>Every-Method</h1>");

// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.

let array = [10, 20, 52, 41, 25];
let ans2 = array.every(checkAge);
function checkAge(age) {
    return age > 10
};
document.write(ans2 + "<br>");


let numEven = [2, 4, 6, 8, 10, 12];
let ansEven = numEven.every((myFunc) => myFunc % 2 === 0);
// function myFunc(even) {
//     return even % 2 === 0;
// };
document.write(ansEven + "<br>");



document.write("<h1>Join-Method</h1>");

// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).

let arr = [1, 2, 3, 4, 5, 6,"Yash"];
document.write(arr.join(" and ") + "<br>");



document.write("<h1>Keys-Method</h1>");

let arr1 = {
    fName : "Jay",
    city: "jnd",
};
let ans3 = Object.keys(arr1);
document.write(ans3 + "<br>");

let fruits = ["a","b","c","d"];
let ans4 = Object.keys(fruits);
document.write(ans4 + "<br>");



document.write("<h1>Splice-Method</h1>");

let namePer = ["jay", "yash", "rushabh", "nayan", "raj"];
let ans5 = namePer.splice(1, 1, "Jaydip");
document.write(namePer + "<br>");
document.write(ans5 + "<br>");





