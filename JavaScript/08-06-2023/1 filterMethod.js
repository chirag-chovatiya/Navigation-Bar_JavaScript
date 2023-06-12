document.write("<h1>Filter-Method</h1>");

let num = [1, 10, 25, 12, 16, 15, 17];
age2 = num.filter((age) => {
    return age >= 15;
});
document.write(age2 + "<br>");


let num2 = [10, 14, 5, 12, 30, 32, 3, 42];
let evenNum = num2.filter((number) => (number % 2 === 0))
document.write(evenNum + "<br>");


let price = [1000, 3200, 2500, 1400, 6500, 4900];
let ans = price.filter((prices) => (prices < 5000));
document.write(ans + "<br>");



document.write("<h1>From-Method</h1>");

let value = "12345678";
let value2 = Array.from(value, func);
function func(ans) {
    return Number(ans);
};
document.write(value2 + "<br>");


let numbers = [1, 1, 2, 3, 4, 5, 2, 3, 6, 4, 5, 2];
let numbers2 = Array.from(new Set(numbers));
document.write(numbers2 + "<br>");



document.write("<h1>Reverse-Method</h1>");

// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.

let fruits = ["Apple", "Orange", "Banana", "Barry"]
fruits.reverse();
document.write(fruits + "<br>");

let num1 = [1, 2, 3, 4, 2, 3, 1];
num1.reverse();
document.write(num1 + "<br>");



document.write("<h1>Push-Method</h1>");

let car = ["Maruti", "Ford", "Hundai"];
document.write(car + "<br>")
car.push("Servolet");
document.write(car + "<br>");

document.write("<h1>Pop-Method</h1>");

let car2 = ["Maruti", "Ford", "Hundai"];
document.write(car2 + "<br>")
let ans1 = car2.pop();
document.write(car2 + "<br>");
document.write("RemoveElement : " + ans1 + "<br>");



document.write("<h1>Includes-Method</h1>");

let car1 = ["Maruti", "Ford", "Hundai"];
let result = car1.includes("Maruti", 1);
document.write(result + "<br>");

let list = "This is a JavaScript Language";
let ans2 = list.includes("JavaScript", 10);
document.write(ans2 + "<br>");



document.write("<h1>Shift-Method</h1>");

let fruits1 = ["apple", "banana", "mango", "cherry"];
document.write(fruits + "<br>");
let ans4 = fruits.shift();
document.write(fruits + "<br>")
document.write("RemoveElement : ", ans4);



document.write("<h1>indexOf-Method</h1>");

// indexOf() returns the position of a specified value in an array:

let bikeName = ["Hero", "Honda", "Suzuki"];
let index = bikeName.indexOf("Honda");
document.write(index + "<br>");

let numbers3 = [1, 2, 5, 4, 6, 3, 8, 3, 10];
let index2 = numbers3.indexOf(3);
document.write(index2 + "<br>");

let numbers1 = "123456789";
let index3 = numbers1.indexOf(7);
document.write(index3 + "<br>");



document.write("<h1>Slice-Method</h1>");

let carName = ["Maruti", "Ford", "Toyota", "Hundai"];
let ans5 = carName.slice(1, 3);
document.write(ans5 + "<br>");



document.write("<h1>Some-Method</h1>");

let ageArray = [34, 23, 20, 26, 13];

let check = ageArray.some(checkMinor);
function checkMinor(age) {
    return age < 15;
};
document.write(check + "<br>");



document.write("<h1>isArray-Method</h1>");

let value5 = ["Apple", "Banana", "Grapes", "Cherry"]
let value6 = Array.isArray(value5);
document.write(value6 + "<br>");

let value7 = "Apple";
let value8 = Array.isArray(value7);
document.write(value8 + "<br>");
