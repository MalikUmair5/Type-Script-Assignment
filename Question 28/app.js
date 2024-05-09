"use strict";
let Question28 = () => {
    let age = 25;
    if (age < 2) {
        console.log("person is a child");
    }
    else if (age >= 2 && age <= 4) {
        console.log("person is a toddler");
    }
    else if (age >= 4 && age < 13) {
        console.log("person is a kid");
    }
    else if (age >= 13 && age < 20) {
        console.log("person is a teenager");
    }
    else if (age >= 20 && age < 65) {
        console.log("person is a young adult");
    }
    else if (age >= 65) {
        console.log("person is a elder");
    }
    else {
        console.log("person is not born yet");
    }
};
Question28();
