"use strict";
let Question31 = () => {
    let usernames = ["admin", "malik", "ali", "umer", "usman", "kashif"];
    let length = usernames.length;
    console.log(usernames.length);
    for (let i = 0; i <= length; i++) {
        usernames.pop();
    }
    console.log(usernames.length);
    if (usernames.length == 0) {
        console.log("No usernames found we need to add some users");
    }
};
Question31();
