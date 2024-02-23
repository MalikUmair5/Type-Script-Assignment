const Question5 = () => {
  let message =
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking";
  let famous_person = "Steve Jobs";

  let quoteElementq5 = document.getElementById("quote");

  if (quoteElementq5) {
    quoteElementq5.innerHTML = `${famous_person} once said, "${message}."`;
  }
};

Question5();