let Question18 = () => {

    let favouriteLocation : string[] = ["Minar e Pakistan", "Iphil Tower", "Quaid's Tomb", "Lahore Fort", "Badshahi Mosque"];
    // print array in orignal order
    console.log("Showing Orignal Order of array")
    console.log(favouriteLocation);
    // print array in alphabitical order
    console.log("Showing array in alphabitical order");
    let arraycopy = favouriteLocation.slice();
    console.log(arraycopy.sort());
    // showing that original array is not changed
    console.log("Again Showing Orignal Order of array")
    console.log(favouriteLocation);
    // print array in reverse order
    console.log("Showing array in reverse order");
    console.log(favouriteLocation.reverse());
    // again reversieng
    console.log("Again Reverse the array")
    console.log(favouriteLocation.reverse());
    // sort orignal array
    console.log("Sort the Orignal array");
    console.log(favouriteLocation.sort());
    // reverse alphabitical order of array
    console.log("Reverse the alphabitical order of array");
    console.log(favouriteLocation.reverse())

    // Showing the orignal array
    console.log("Showing the orignal array we see that changes have been saved")

    console.log(favouriteLocation)
   

    
  };
  
  Question18();