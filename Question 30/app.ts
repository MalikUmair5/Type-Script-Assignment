

let Question30 = () => {

    let usernames: string[] = ["admin", "malik", "ali", "umer", "usman", "kashif"];

    for(let i = 0; i < usernames.length; i++){
        if(usernames[i] === "admin"){
            console.log("Hello Admin, Would you like to see a status report?")
        }
        else{
            console.log("Hello " + usernames[i] + ", Thank you for logging in again")
        }
    }

};

Question30();