const Question9 = () => {
  var favoriteNumeber = 7;
  let messageElement = document.getElementById("favoriteNumberMsg");

  if (messageElement) {
    messageElement.innerText = "My favourite Number is: " + favoriteNumeber;
  }

  console.log(messageElement);
};

Question9();
