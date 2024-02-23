let Question2 = () => {
  let userName = window.prompt("Enter your name", "Harry Potter");

  let messageElement = document.getElementById("userMessage");

  if (userName) {
    if (messageElement)
      messageElement.innerHTML = `Hello ${userName}, welcome to the website!`;
  } else {
    if (messageElement) messageElement.innerHTML = "Please enter your name!";
  }
};
Question2();
