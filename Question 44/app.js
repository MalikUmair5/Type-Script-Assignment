"use strict";
let Question43 = () => {
    let sandwitchIngredients = (array = ["please provide ingredients"]) => {
        console.log(`Sandwich ingredients selected: `, array.join(", "));
    };
    sandwitchIngredients(["pepperoni", "chiken", "kabab", "anda", "kheera", "tamatar"]);
    sandwitchIngredients(["mutton", "cabbage", "egg", "dabroti"]);
    sandwitchIngredients();
};
Question43();
