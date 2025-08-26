// variables

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.qoute')
let person = document.querySelector('.person')
 
const quotes = [
  {
    quote: `The best way to get started is to quit talking and begin doing.`,
    person: `Walt Disney`
  },
  {
    quote: `Don’t let yesterday take up too much of today.`,
    person: `Will Rogers`
  },
  {
    quote: `It’s not whether you get knocked down, it’s whether you get up.`,
    person: `Vince Lombardi`
  },
  {
    quote: `If you are working on something exciting, it will keep you motivated.`,
    person: `Steve Jobs`
  },
  {
    quote: `Success is not in what you have, but who you are.`,
    person: `Bo Bennett`
  },
  {
    quote: `Hardships often prepare ordinary people for an extraordinary destiny.`,
    person: `C.S. Lewis`
  },
  {
    quote: `Believe you can and you're halfway there.`,
    person: `Theodore Roosevelt`
  },
  {
    quote: `Your time is limited, so don’t waste it living someone else’s life.`,
    person: `Steve Jobs`
  },
  {
    quote: `In the middle of every difficulty lies opportunity.`,
    person: `Albert Einstein`
  },
  {
    quote: `Happiness depends upon ourselves.`,
    person: `Aristotle`
  }
];


btn.addEventListener('click', function(){
     let random = Math.floor(Math.random() * quotes.length);
     quote.innerText = quotes[random].quote;
     person.innerText = quotes[random].person;
})