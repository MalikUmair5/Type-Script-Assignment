let quote =
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking";
let author = "Steve Jobs";

let quoteElement = document.getElementById("quote");

if (quoteElement) {
  quoteElement.innerHTML = `${author} once said, "${quote}."`;
}