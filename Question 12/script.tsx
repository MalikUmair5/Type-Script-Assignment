let Question12 = () => {
  let names = ["abdullah", "ahmed", "ali", "amir", "bilal"];
  let namesList = document.getElementById("namesList");

  names.forEach((name) => {
    console.log(`Assalamualaikum ${name} greetings`);
    namesList
      ? (namesList.innerHTML += `<li>Assalamualaikum ${name} greetings </li>`)
      : null;
  });
};

Question12();
