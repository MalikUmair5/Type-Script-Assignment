

let Question29 = () => {

let favourit_fruits : string[] = ["apple", "banana", "mango", "orange", "cheeko"];
  
    favourit_fruits.find((fruit) => {
        if(fruit == "mango"){
            console.log("I really like mango");
        }
        else if (fruit == "banana"){
            console.log("I really like banana");
        }
        else if (fruit == "orange"){
            console.log("I really like orange");
        }
        else if (fruit == "apple"){
            console.log("I really like apple");
        }
        else if (fruit == "cheeko"){
            console.log("I really like cheeko");
        }
        else{
            console.log("I really like nothing");
        }
    });


};

Question29();