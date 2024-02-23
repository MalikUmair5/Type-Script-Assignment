const Question7 = () => {
  let additon = 4 + 4;
  let subtraction = 10 - 2;
  let multiplication = 4 * 2;
  let division = 16 / 2;

  let additonElement = document.getElementById("add");
  let multiplicationElement = document.getElementById("mult");
  let subtractionElement = document.getElementById("sub");
  let divisionElement = document.getElementById("div");

  if (
    additonElement &&
    multiplicationElement &&
    divisionElement &&
    subtractionElement
  ) {
    additonElement.innerText = `Addition: ${additon}`;
    multiplicationElement.innerText = `Multiplication ${multiplication}`;
    subtractionElement.innerText = `Subtraction ${subtraction}`;
    divisionElement.innerText = `Division ${division}`;
  }
};

Question7();