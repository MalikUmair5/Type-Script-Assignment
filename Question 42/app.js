"use strict";
let Question42 = () => {
    let magician_names = ["Dynamo", "David Blaine", "David Copperfield", "Harry Houdini", "Penn & Teller", "Criss Angel", "Derren Brown", "Lance Burton", "Shin Lim", "Doug Henning"];
    magician_names.forEach((name, index) => {
        magician_names[index] = `The great Magician ${name}`;
    });
    console.log(magician_names);
};
Question42();
