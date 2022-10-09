"use strict";
const me = {
    name: "Luka",
    age: 19,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
greetPerson(me);
console.log(me);
