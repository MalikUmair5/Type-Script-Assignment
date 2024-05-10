

let Question45 = () => {

    interface carinfo{
        manufacture: string,
        model: string,
        color?: string,
        feature?: string
    }

    let carInfo = (manufacturer: string, model:string, color?: string, feature?: string) => {
      if(color == undefined || feature == undefined){
        if(color){
            let carobj: carinfo = {
                manufacture: manufacturer,
                model: model,
                color: color
            }
            return carobj;
        }
        
        else if(feature && color){
            let carobj: carinfo = {
                manufacture: manufacturer,
                model: model,
                color: color,
                feature: feature
            }
            return carobj;
        }
        else{
            let carobj: carinfo = {
                manufacture: manufacturer,
                model: model
            }
            return carobj;
        }
        
        
      }

    }

   let car =  carInfo("honds", "2004", );
   console.log(car)

};

Question45();