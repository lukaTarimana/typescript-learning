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
// explicit types
var characterE;
var ageE;
var isLoggedInE;
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
var ninjasA;
//push მეთოდს ვერ გამობიყენებთ ამ დროს
ninjasA = ["yoshi", "mario"];
/*push მეთოდის გმაოყენეაბ აქ შეგვიძლია რადგან
  mixed variable-ის დეკლარირება ხდება როგორც ერეის
  ზედა შემთხვევაში სანამ ninjas არ გავუტოლეთ ერეის
  მაქამდე არ იყო აღქმული როგორც ერეი შესაბამისად
  push მეთოდი არ მუშაობდა :)
*/
var mixedP = [];
mixedP.push("hello");
mixedP.push(20);
console.log(mixedP);
//--------union types >>> (string|boolean|number)
/*union types-ს ფრჩიხილები არეის დროს სჭირდება
  თუმცა ჩვეულებრივი variable-ის დროს არა
*/
var uidU;
uidU = "123";
uidU = 123;
//objects
/* როდესაც ტიპად ვუწერთ ობიექტს ერეის მნიშვნელობას თუ
მივცემთ ერორს არ ამოაგდებს რადგან ერეიც თავის თავში ობიექტია
 */
var ninjaOneO;
ninjaOneO = { name: "yoshi", age: 30 };
ninjaOneO = [];
var ninjaTwoO;
ninjaTwoO = {
    name: "mario",
    age: 20,
    beltColor: "black"
};
//any type
var ageA = 25;
ageA = true;
console.log(ageA);
ageA = "hello";
console.log(ageA);
ageA = { name: " luigi" };
console.log(ageA);
var mixedA = [];
mixedA.push(5);
mixedA.push("mario");
mixedA.push(false);
console.log(mixedA);
var ninjaA;
ninjaA = { name: "yoshi", age: 23 };
console.log(ninjaA);
ninjaA = { name: 23, age: "yoshi" };
console.log(ninjaA);
