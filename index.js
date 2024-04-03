
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// create a function titleCased to change the strings to title case
function titleCased() {
  return tutorials.map(title =>{
    // use .split to split the titleCased string into individual words
    let titleWords = title.split(' ');//there should be space between the ''
    //making the first letter of each word a capital letter 
    let capitalWords = titleWords.map(allWords => {
      return allWords.charAt(0).toUpperCase() + allWords.slice(1);

    }); 
    // Returning the split words back to a single string 
    return capitalWords.join(' ');// there should be space between the ''
  })
}
