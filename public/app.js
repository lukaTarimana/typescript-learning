import { Invoice } from "./classes/Invoice.js";
import { ListTamplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
//type Hasformater
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("yoshi", "web work", 234);
// docTwo = new Payment("mario", "plumbing work", 140);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// console.log(docs[0].format());
// //----------\
// const invOne = new Invoice("Mario", "work on website", 230);
// const invTwo = new Invoice("luigi", "work on website", 600);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((inv) => {
//   // არ გამოვა რადგან ეს readonly ა inv.client ="safasf";
//   console.log(inv.client, inv.amount, inv.format());
// });
//------------------\
// const anchor = document.querySelector("a");
// console.log(anchor?.href);
// const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form");
console.log(form.children);
//---------inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTamplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //TUPLES
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
//GENERICS
/*
<T> იჭერს ყველა ფროფერთის და გვაძლევს ფროფერთიებზე წვდომას
 მის გარეშე ობიექტის გამოყენებისას ვერ გადავალთ ფროფერთიებში
extends სიტყვა ანიჭებს generics ტაიპს
 */
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 34 });
console.log(docOne.name);
//with interfaces
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }
// const docThree: Resource<string> = {
//   uid: 1,
//   resourceName: "person",
//   data: "shaun",
// };
// const docFour: Resource<string[]> = {
//   uid: 2,
//   resourceName: "shoppingList",
//   data: ["bread,banana,coffe"],
// };
// console.log(docThree, docFour);
// ENUMS
/*
ENUM არის ტიპი რომელიც იწერება ისე როგორც ობიექტი თუმცა
value არის ციფრები როგორც ერეიშია key ები
*/
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOneA = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: " name of the wind" },
};
const docTwoA = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: "yoshi" },
};
console.log(docOneA);
// tuples
let arr = ["ryu", 24, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];
let tup = ["ryu", 25, true];
tup[0] = "cat";
tup[1] = 74;
let student;
student = ["jeki chan", 223423];
