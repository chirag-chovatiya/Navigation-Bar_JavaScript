
document.write("<h1>Date And Time </h1>");

let dat = new Date();
let dat2 = dat.getDate();
let dat3 = dat.getMonth();
let dat4 = dat.getFullYear();
document.write("Date is :" + dat2 + "/" + dat3 + "/" + dat4 + "<br>");

let time = new Date();
let time1 = time.getHours();
let time2 = time.getMinutes();
let time3 = time.getSeconds();
let time4 = time.getMilliseconds();
document.write("Time is :" + time1 + ":" + time2 + ":" + time3 + ":" + time4 + ":");



document.write("<h1>Object</h1>");

let userName = {
    name: "jay",
    age: 22,
    lName: "patel"
};
let obj = userName.age;
document.write(obj);



document.write("<h1>This KeyWord</h1>");

let keyWord = {
    name: "Yash",
    age: 25,
    gender: "male",
    fullName: function () {
        return this.name + " " + this.age;
    }
};
document.write(keyWord.fullName());



document.write("<h1>Call Method</h1>");

let obj1 = {
    fName: "Jay",
    lName: "Patel",
}
let obj2 = {
    fName: "Yash",
    lName: "Vaghasiya",
}
let per = {
    fullName: function () {
        return this.fName + " " + this.lName;
    }
};
document.write(per.fullName.call(obj1));
