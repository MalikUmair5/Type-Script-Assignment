

let Question32 = () => {

    let current_users: string[] = ["admin", "malik", "ali", "umer", "usman", "kashif"];

    let userName = "ali";

    current_users.find((user) => { 
        if(user === userName){
            console.log("Username is already taken, Please enter a new username")
        }
        else{
            console.log("Username is available")
        }
    });

    // for(let i = 0; i < current_users.length; i++){
    //     if(current_users[i] === userName){
    //         console.log("Username is already taken, Please enter a new username")
    //     }
    //     else{
    //         console.log("Username is available")
    //     }
    // }

};

Question32();