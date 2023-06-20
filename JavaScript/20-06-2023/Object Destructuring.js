
document.write("<h1>Object Destructuring</h1>");

let car = {
    Hundai: "verna",
    Maruti: "swift",
    year: 1991,
    model: 2013,
};
let { Hundai, Maruti, ...otherEle } = car;
document.write(Maruti + "<br>");
document.write(Hundai);



document.write("<h1>Object Inside Array</h1>");

const user = [
    { userId: 1, firstName: "jay", gender: "male" },
    { userId: 2, firstName: "yash", gender: "male" },
    { userId: 3, firstName: "nayan", gender: "male" },
];
for (let users of user) {
    document.write(users.firstName + "<br>");
};



document.write("<h1>Nested Destructuring</h1>");

const user1 = [
    { userId: 1, firstName: "jay", gender: "male" },
    { userId: 2, firstName: "yash", gender: "malehhhh" },
    { userId: 3, firstName: "nayan", gender: "male" },
];
const [, { firstName: user2firstName, userId }, { gender: user2gender }] = user1;
document.write(user2firstName + "<br>");
document.write(userId + "<br>");
document.write(user2gender);



document.write("<h1>Iterate Object</h1>");

const person = {
    name: "Jay",
    age: 23,
    "person hobbies": ["listning", "singing", "riding"]
};
for (let key in person) {
    // document.write(key + "<br>");
    // document.write(person[key] + "<br>");
    // document.write(`${key} : ${person[key]}` + "<br>")
    document.write(key, " : ", person[key] + "<br>");
};



document.write("<h1>Computed Properties</h1>");

const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "objValue1";
const value2 = "objValue2";

// const obj1 = {
//     [key1]: value1,
//     [key2]: value2,
// }
// document.write(obj1)

const obj = {};
obj[key1] = value1,
    obj[key2] = value2,
    document.write(obj)