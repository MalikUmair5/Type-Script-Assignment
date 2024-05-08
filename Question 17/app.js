"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Question17 = () => {
    //Abdullah can not make to the dinner so we have to exclude it and fahad is the new invit
    let names = ["Abdullah", "Hassan", "Usaif", "Umair", "fadi"];
    names.forEach(names => {
        console.log(`Dear ${names} I invite you to Dinner in my House Please Come`);
    });
    console.log("Abdullah can not make to the dinner due to some emergency");
    names.find((name, index) => {
        if (name === "Abdullah") {
            names.splice(index, 1, "Fahad");
        }
    });
    console.log(names);
    names.forEach(names => {
        console.log(`Dear ${names} I invite you to Dinner in my House Please Come`);
    });
    // Start Question 16
    console.log("We found a Bigger Dinner Table so We have to invite more people");
    // Adding new guset at the beginning of the list
    names.unshift("ali");
    // Adding new guest at the middle of the list
    names.splice(Math.floor(names.length) / 2, 0, "Ahsan");
    // Adding new guest at the end of the list by using append
    names.push("kashif");
    names.forEach(names => {
        console.log(`Dear ${names} I invite you to Dinner in my House Please Come`);
    });
    let removedpeoples = [];
    let invitedPoeples = [];
    // Start Question 17
    console.log("We can only invite two people for dinner");
    console.log("Sorry for the inconvenience");
    console.log(names);
    for (let i = 0; i < names.length; i++) {
        if (i >= 2) {
            console.log(i);
            removedpeoples.push(names[i]);
        }
        else if (i < 2) {
            invitedPoeples.push(names[i]);
        }
    }
    console.log("Invited Peoples");
    invitedPoeples.forEach(names => {
        console.log(`Dear ${names} I invite you to Dinner in my House Please Come`);
    });
    console.log("Removed Peoples");
    removedpeoples.forEach(names => {
        console.log(`Dear ${names} I am sorry to inform you that I can not invite you to Dinner`);
    });
    console.log(invitedPoeples.length);
};
Question17();
exports.default = Question17;
