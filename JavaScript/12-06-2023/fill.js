// array.fill(value, start, end)
document.write("<h1>Array Fill Method</h1>");

let allName = ["apple", "Banana", "table"];
let ans = allName.fill("Barry", 0, 3);
document.write(ans + "<br>");

let car = [1,20,50,32,40];
let ans1 = car.fill(30,2,3);
document.write(ans1 + "<br>");



document.write("<h1>Find Method</h1>")

let numbers = [1, 2, 5, 6, 8, 9];
let ans3 = numbers.find(function (arr) {
    return arr > 7
});
document.write(ans3 + "<br>");



document.write("<h1>FindIndex Method</h1>");

let num1 = [10, 11, 19, 20];
let ans4 = num1.findIndex((check) => check > 19);
document.write(ans4 + "<br>");

let name1 = ["jay","Yash","Nayan"];
let nans = name1.findIndex((nam) => nam == "Yash");
document.write(nans + "<br>");



document.write("<h1>LastIndexOf Method</h1>");

let firstName = ["jay", "nayan", "yash", "jay", "rushabh"];
let lastIndex = firstName.lastIndexOf("jay");
document.write(lastIndex + "<br>");

let num = [1, 5, 4, 6, 2, 3, 4];
let numAns = num.lastIndexOf(4);
document.write(numAns + "<br>");



document.write("<h1>Length Method</h1>");

let arr = "hello Java Script";
document.write(arr.length);



document.write("<h1>Reduce Method</h1>");

let number = [1, 2, 3, 4, 5, 6, 7];
let numbAns = number.reduce((total, num) => total + num);
document.write(numbAns + "<br>");

let str = ["a", "b", "c", "d", "e"];
let strbAns = str.reduce((total, num) => total + num);
document.write(strbAns + "<br>");



document.write("<h1>Split Method</h1>");

let text = "How are you doing today?";
let text2 = text.split("o")
document.write(text2[4]);



document.write("<h1>ToString Method</h1>");

let num2 = 12;
let ans5 = num2.toString();
document.write(typeof ans5 + "<br>");

let arr2 = ["Name", "RollNo"];
let ans6 = arr2.toString();
document.write(arr2 + "<br>");
document.write(ans6 + "<br>");



document.write("<h1>Unshift Method</h1>");

let fName = ["jay","vishal","yash"];
fName.unshift("Jaydip");
document.write(fName);



document.write("<h1>ValueOf Method</h1>");

let values = "the Java is best";
document.write(values.valueOf());

