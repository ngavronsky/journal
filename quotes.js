var quotes = [
  "Keep your face to the sunshine and you cannot see a shadow.",
  "Once you replace negative thoughts with positive ones, you'll start having positive results.",
  "I always like to look on the optimistic side of life, but I am realistic enough to know that life is a complex matter.",
  "Positive thinking will let you do everything better than negative thinking will.",
  "Pessimism leads to weakness, optimism to power.",
  "The thing that lies at the foundation of positive change, the way I see it, is service to a fellow human being.",
  "Perpetual optimism is a force multiplier.",
  "Attitude is a little thing that makes a big difference.",
];

function goodQuotes() {
  randomNum = Math.floor(Math.random() * quotes.length);
  document.getElementById('quotes').innerHTML = quotes[randomNum];
};

goodQuotes();
