"use strict";
let Question38 = () => {
    let describe_city = (city, country = "Pakistan") => {
        console.log(`${city} is in ${country}`);
    };
    describe_city("Karachi");
    describe_city("Lahore");
    describe_city("Delhi", "India");
};
Question38();
