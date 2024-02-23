let inputPersonName = document.getElementById("inputPersonName");
let element = document.getElementById("para");


let myfunc = () => {
  if (element && inputPersonName) {
    let nameWithWhiteSpace = `\t ${inputPersonName.value} \n`;

    console.log(nameWithWhiteSpace);
    console.log(nameWithWhiteSpace.replace(/\s/g, ""));
  }
};

console.log(element);
