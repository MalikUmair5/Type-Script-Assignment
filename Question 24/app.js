"use strict";
let Question24 = () => {
    // Test of inequality with strings
    console.log("String Test");
    let country = "Pakistan";
    console.log(country == "malaysia");
    console.log(country != "malaysia");
    // Test using lower case function
    console.log("Lower Case function");
    let city = "KARACHI";
    console.log(city.toLowerCase() == "karachi");
    console.log(city == city.toLowerCase());
    // Test of inequality with numbers
    console.log("Number Test");
    let num1 = 11;
    let num2 = 12;
    console.log(num1 == num2);
    console.log(num1 != num2);
    console.log(num1 > num2);
    console.log(num1 < num2);
    console.log(num1 >= num2);
    console.log(num1 <= num2);
    // Test using && and || operators   
    console.log("Logical Test");
    let a = 10;
    let b = 20;
    let c = 30;
    console.log(a > b && a < c);
    console.log(a > b || a < c);
    // chect wheter an item in present in an array or not
    console.log("Array Test");
    let Birds = ["Parrot", "Crow", "Eagle", "Sparrow", "Pigeon"];
    Birds.find((element) => {
        if (element == "Crow") {
            console.log("Crow is present in the array");
        }
    });
};
Question24();
