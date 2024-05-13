"use strict";
let Question45 = () => {
    let carInfo = (manufacturer, model, options) => {
        if (options) {
            let car = {
                manufacture: manufacturer,
                model: model,
                options: options
            };
            return car;
        }
        else {
            let car = {
                manufacture: manufacturer,
                model: model,
            };
            return car;
        }
    };
    let car = carInfo("honds", "2004", { color: "red", engine: "V8" });
    console.log(car);
};
Question45();
