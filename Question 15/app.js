"use strict";
let Question15 = () => {
    //Abdullah can not make to the dinner so we have to exclude it and fahad is the new invit
    let names = ["Abdullah", "Hassan", "Usaif", "Umair", "Hassan"];
    names.forEach(names => {
        console.log(`Dear ${names} I invite you to Dinner in my House Please Come`);
    });
    console.log("Abdullah can not make to the dinner due to some emergency");
    names.find((name, index) => {
        if (name === "Abdullah") {
            names.splice(index, 1, "Fahad");
        }
    });
    names.forEach(names => {
        console.log(`Dear ${names} I invite you to Dinner in my House Please Come`);
    });
    console.log(names);
};
Question15();
