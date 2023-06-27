document.write("<h1>Function</h1>");

function sum(number1,number2,number3){
    return number1 + number2 + number3;
};
const newStore = sum(10,5,20)
document.write(newStore + "<br>");

function even(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
document.write(even(14));



document.write("<h1>Function Expression</h1>");

const sum1 = function(number1,number2,number3){
    return number1 + number2 + number3;
};
const ans1 = sum1(5,3,6);
document.write(ans1 + "<br>");

const findTarget = function(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
};
const array = [1, 5, 3, 6, 8, 9];
const ans = findTarget(array,9);
document.write(ans);



document.write("<h1>Arrow Function</h1>");

const sum2 = (number1,number2,number3) =>{   // => arrow function
    return number1 + number2 + number3;
};
const newStore1 = sum2(10,5,20)
document.write(newStore1 + "<br>");

const even1 = (number) => {
    if (number % 2 === 0) {
        return true;
    }
    return false;
};
document.write(even1(10) + "<br>");

const odd1 = (number) => {
    return number % 2 === 0
}
document.write(odd1(15));



document.write("<h1>Function Default Parameter</h1>");

function app(a,b=40){
    return a * b;
};
const ans2 = app(4);
document.write(ans2);



document.write("<h1>Destructuring Parameter</h1>");

const detail = {
    firstName : "jay",
    lastName : "patel",
    age : 22
};
function printDetail({firstName, age}){
    document.write(firstName + "<br>");
    document.write(age);
}
printDetail(detail);



document.write("<h1>Function In Function</h1>");


function myApp() {
    const a1 = () => {
        document.write("Hello Script" + "<br>");
    };

    const a2 = (num1, num2) => {
        return num1 + num2;
    };

    const a3 = (num1, num2) => num1 * num2;

    a1();

    const ans = a2(10, 12);
    document.write(ans + "<br>");

    const ans2 = a3(5, 10);
    document.write(ans2);
}
myApp();



document.write("<h1>Rest Parameter</h1>");

function addAll(...number){
    let total = 0;
    for(let numb of number){
        total += numb;
    }
    return total;
};
const totals = addAll(5,4,6,5);
document.write(totals);

