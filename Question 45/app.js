"use strict";
let Question45 = () => {
    let carInfo = (manufacturer, model, color, feature) => {
        if (color == undefined || feature == undefined) {
            if (color) {
                let carobj = {
                    manufacture: manufacturer,
                    model: model,
                    color: color
                };
                return carobj;
            }
            else if (feature) {
                let carobj = {
                    manufacture: manufacturer,
                    model: model,
                    feature: feature
                };
                return carobj;
            }
            else if (feature && color) {
                let carobj = {
                    manufacture: manufacturer,
                    model: model,
                    color: color,
                    feature: feature
                };
                return carobj;
            }
            else {
                let carobj = {
                    manufacture: manufacturer,
                    model: model
                };
                return carobj;
            }
        }
    };
    let car = carInfo("honds", "2004", "red");
    console.log(car);
};
Question45();
