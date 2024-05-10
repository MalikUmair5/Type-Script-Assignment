"use strict";
let Question43 = () => {
    let magician_names = ["Dynamo", "David Blaine", "David Copperfield", "Harry Houdini", "Penn & Teller", "Criss Angel", "Derren Brown", "Lance Burton", "Shin Lim", "Doug Henning"];
    let modified_magicians = [];
    magician_names.forEach((name) => {
        modified_magicians.push(`The great Magician ${name}`);
    });
    console.log(modified_magicians);
    console.log(magician_names);
};
Question43();
