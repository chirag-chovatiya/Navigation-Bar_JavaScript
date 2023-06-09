document.write("<h1>ForEach-Method</h1>");

let myArray = [2, 5, 10, 3, 4];
let myArray1 = [];

myArray.forEach((value) => {
    document.write(value + "<br>");
    myArray1.push(value * 2);
});
document.write(myArray1 + "<br>");



document.write("<h1>Map-Method</h1>");

let myArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
let myArray3 = [];

myArray3 = myArray2.map((value) => {
    // myArray1.push(value * 3);
    return value * 2;
});
document.write(myArray3 + "<br>");



document.write("<h1>Multipal_Array_Object-Method</h1>");

const Data = [
    {
        "Name": "Chirag",
        "Surnam": "Chovatiya",
        "City": [
            {
                "Name": "Yash",
                "Surnam": "Vaghasiya",
                "City": {
                    "Name": "Yash",
                    "Surnam": "Vaghasiya",
                    "City": "Bombay",
                },
            },
            "Ahmdabad",
            "Surat"],
    },
    {
        "Name": "Yash",
        "Surnam": "Vaghasiya",
        "City": "Rajkot",
    }];
// const [,{City:Data2}] = Data;
// console.log(Data2);

document.write(Data[0].City[0].City.City + "<br>")


const data2 = [{
    id: 23,
    name: "John",
    email: "John@domain.com",
    appointment_category: 3,
    time: "morning"
}, {
    id: 35,
    name: "John",
    email: "John@domain.com",
    appointment_category: 4,
    time: "afternoon"
}];

document.write(data2[1].time) 



document.write("<h1>Reduce & ReduceRight-Method</h1>");

const value = ["1", "2", "3", "4", "5", "6"];
const valueLeft = value.reduce((prev, cur) => {
    return prev + cur;
});
const valueRight = value.reduceRight((prev, cur) => {
    return prev + cur;
});
document.write(valueLeft + "<br>");
document.write(valueRight + "<br>");


let numbers = [1, 2, 3, 4];
function sum_reducer(accumulator, currentValue) {
    return accumulator * currentValue;
};
let sum = numbers.reduceRight(sum_reducer);
document.write(sum + "<br>");


let arr = [1.5, 20.3, 11.1, 40.7];

function sumofArray(sum, num) {
    return sum + Math.round(num);
};
function myGeeks(item) {
    document.write(arr.reduceRight(sumofArray, 0) + "<br>");
};
myGeeks();

