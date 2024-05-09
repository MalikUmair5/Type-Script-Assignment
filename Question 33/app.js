"use strict";
let Question33 = () => {
    let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < number.length; i++) {
        if (number[i] === 1) {
            console.log("1st");
        }
        else if (number[i] === 2) {
            console.log("2nd");
        }
        else if (number[i] === 3) {
            console.log("3rd");
        }
        else {
            console.log(`${number[i]}th`);
        }
    }
};
Question33();
