let Question16 = () => {
 //Abdullah can not make to the dinner so we have to exclude it and fahad is the new invit
    let names = ["Abdullah", "Hassan", "Usaif", "Umair", "Hassan"];
  
    names.forEach(names => {
        console.log(`Dear ${names} I invite you to Dinner in my House Please Come`);
    })

    console.log("Abdullah can not make to the dinner due to some emergency")

    names.find((name, index) => {
        if(name === "Abdullah"){
            names.splice(index, 1, "Fahad")
        }
    })

    console.log(names)

    names.forEach(names => {
        console.log(`Dear ${names} I invite you to Dinner in my House Please Come`);
    })

    // Start Question 16
    console.log("We found a Bigger Dinner Table so We have to invite more people")
    // Adding new guset at the beginning of the list
    names.unshift("ali")
    // Adding new guest at the middle of the list
    names.splice(Math.floor(names.length) / 2, 0, "Ahsan")
    // Adding new guest at the end of the list by using append
    names.push("kashif")

    names.forEach(names => {
        console.log(`Dear ${names} I invite you to Dinner in my House Please Come`);
    })
  };
  
  Question16();