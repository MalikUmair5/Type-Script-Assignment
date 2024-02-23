let Question3 = () => {
  let userName = window.prompt("Enter your name", "Harry Potter");
  // Selected HTML Elements
  let LowerCaseElement = document.getElementById("LowerCase");
  let UpperCaseElement = document.getElementById("UpperCase");
  let TitleCaseElement = document.getElementById("TitleCase");

  // Adding value to elements
  if (userName) {
    if (LowerCaseElement && UpperCaseElement && TitleCaseElement) {
      LowerCaseElement.innerHTML = "Lower Case = " + userName.toLowerCase();
      UpperCaseElement.innerHTML = "Upper Case = " + userName.toUpperCase();
      TitleCaseElement.innerHTML =
        "Title Case = " +
        userName
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ");
    }
  }

  // title Case Code for Single Word
  // TitleCaseElement.innerHTML =
  // "Title Case = " + userName[0].toUpperCase() + userName.slice(1);
};
Question3();
