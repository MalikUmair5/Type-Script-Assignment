"use strict";
let Question36 = () => {
    let make_tshirt = (size = "Large", text_messege = "I love TypeScript") => {
        console.log(`Tshirt is ready with size ${size} and text message ${text_messege}`);
    };
    make_tshirt();
    make_tshirt("Medium", "I love JavaScript");
    make_tshirt("Small", "I love Python");
};
Question36();
