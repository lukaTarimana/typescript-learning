"use strict";
// let names: any = ["luigi", "mario", "yoshi"];
// names.push("toad");
// // names.push(3);
// // names[0] = 3;
// let numbers = [10, 20, 30, 40];
// numbers.push(50);
// // numbers.push("shaun");
// let mixed = ["ken", 4, "chun-li", 8, 9];
// mixed.push(3);
// // mixed.push("wrwr");
// // mixed.push(true);
// mixed[0] = "asfas";
// let ninja = {
//   name: "mario",
//   belt: "black",
//   age: 30,
// };
// ninja.age = 40;
// ninja.name = "ryu";
// // ninja.age = "30";
// explicit types ხელით რომ უწერ როგორი ტიპი უნდა იყოს
let characterE;
let ageE;
let isLoggedInE;
ageE = 30;
// arrays
/* თუ ერეის გამოცხადებისთანავე ჩავუწერთ მნიშვნელობებს
  მაშინ მხოლოდ მაგ ტიპის მნიშვნელობების ჩაწერა შეგვეძლება
  თუ გამოცხადების დროს მივუწერთ ერეის მხოლოდ იმას თუ რა ტიპის იყოს
  მაგ შემთხვევაში შემდეგში შეგვეძლება იმ ტიპის მნიშვნელობები ჩავწეროთ
  მაგალითად თუ გვინდა არეიში ჩაიწეროს მხოლოდ სტრინგი და რიცხვი
  და თავიდან მხოლოდ სტრინგის ჩაწერა შეგვიძლია მაშინ ჯერ გამოცხადების
  დროს უნდა მივუწეროთ ტიპი და მაგის შემდგომ ცალკე ხაზზე ჩავსვათ
  მნიშვნელობები
*/
let ninjasA;
//push მეთოდს ვერ გამობიყენებთ ამ დროს
ninjasA = ["yoshi", "mario"];
/*push მეთოდის გმაოყენეაბ აქ შეგვიძლია რადგან
  mixed variable-ის დეკლარირება ხდება როგორც ერეის
  ზედა შემთხვევაში სანამ ninjas არ გავუტოლეთ ერეის
  მაქამდე არ ერეის მნიშვნელობა რა ჰქონდა მინიჭებული შესაბამისად
  push მეთოდი არ მუშაობდა :)
*/
let mixedP = [];
mixedP.push("hello");
mixedP.push(20);
console.log(mixedP);
//--------union types >>> (string|boolean|number)
/*union types-ს ფრჩიხილები ერეის დროს სჭირდება
  თუმცა ჩვეულებრივი variable-ის დროს არა
*/
let uidU;
uidU = "123";
uidU = 123;
//objects
/* როდესაც ტიპად ვუწერთ ობიექტს და ერეის მნიშვნელობას
მივცემთ, ერორს არ ამოაგდებს, რადგან ერეიც თავის თავში ობიექტია
 */
let ninjaOneO;
ninjaOneO = { name: "yoshi", age: 30 };
ninjaOneO = [];
let ninjaTwoO;
ninjaTwoO = {
    name: "mario",
    age: 20,
    beltColor: "black",
    // skills: "saf",
};
//any type
let ageA = 25;
ageA = true;
console.log(ageA);
ageA = "hello";
console.log(ageA);
ageA = { name: " luigi" };
console.log(ageA);
let mixedA = [];
mixedA.push(5);
mixedA.push("mario");
mixedA.push(false);
console.log(mixedA);
let ninjaA;
ninjaA = { name: "yoshi", age: 23 };
console.log(ninjaA);
ninjaA = { name: 23, age: "yoshi" };
console.log(ninjaA);
//function type
//function ტიპისთვის პირველი ასო დიდი უნდა იყოს (Function)
let greet = () => {
    console.log("hello, world");
};
//greet = "hello" (X)
let greet2;
greet = () => {
    console.log("hello, again");
};
//თუ ფუნქცია არაფერს აბრუნებს ის მაინც აბრუნებს void-ს
//void ნიშნავს რომ საერთოდ არ ექნება value (სიცარიელე)
const add = (a, b) => {
    console.log(a + b);
};
add(5, 10);
const addOptionalParameter = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
addOptionalParameter(5, 6);
//როდესაც default value-ს (c: number | string = 10) ვანიჭებთ კითხვის ნიშანი არ უნდა
const addOptional = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
addOptional(6, 2);
const minus = (a, b) => {
    return a + b;
};
/*result ავტომატურად ხდება number type რადგან ფუნქცია number ტიპს აბრუნებს
ეს იგივეა დაგვეწერა:
                                      V V
const minus = (a: number, b: number):number => {
  return a + b;
};
*/
let result = minus(10, 7);
const Ingletails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetA = (user) => {
    console.log(`${user.name} says hello`);
};
//Function Signatures
let greetSignaturesA;
// example 1
let greetSignaturesB;
greetSignaturesB = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
