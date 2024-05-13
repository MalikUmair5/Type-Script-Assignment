

let Question45 = () => {

    interface carinfo {
        manufacture: string,
        model: string,
        options?: object

    }
    let carInfo = (manufacturer: string, model: string, options?: object) => {

        if (options) {
            let car: carinfo = {
                manufacture: manufacturer,
                model: model,
                options: options
            }
            return car
        }
        else {
            let car: carinfo = {
                manufacture: manufacturer,
                model: model,
            }
            return car
        }

    }
    let car = carInfo("honds", "2004", { color: "red", engine: "V8"});
    console.log(car)

};

Question45();