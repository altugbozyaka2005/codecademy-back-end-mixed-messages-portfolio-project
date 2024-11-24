import { quotesArray } from "./quotes.js";
import readline from "readline";


// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  // Utility function to ask questions (returns a Promise)
  const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
  };

  let number
  let quote_length
  let random_quote

// program start
(async () => {
    console.log("Welcome to Motivation School!")
    while (true)
    {
        quote_length = await askQuestion("Would you like a LONG, MEDIUM, SHORT motivational quote?")
        if (quote_length.toUpperCase() == 'LONG' || quote_length.toUpperCase() == 'MEDIUM' || quote_length.toUpperCase() == 'SHORT') {
            break
        }
    }
    
    while (true)
    {
        number = await askQuestion("How many motivational hits do you need?")
        if (Number.isInteger(parseInt(number)) && (parseInt(number) > 0)) {
            break
        }
    }
    
    for (let i = 0; i < number; i++) {
        let found = false
        while (!found) {
            random_quote = Math.floor(Math.random() * quotesArray.length)
            if (correct_length(random_quote) == quote_length.toUpperCase()) {
                found = true
            }
        }
        console.log(`${i+1}) ${quotesArray[random_quote].quote} - ${quotesArray[random_quote].author}`)
    }
    
    rl.close()
})()

const correct_length = (index) => {
    let num_words = quotesArray[index].quote.split(' ').length;
    if (num_words < 8) {
        return "SHORT"
    }
    else if (num_words < 15) {
        return "MEDIUM"
    } else {
        return "LONG"
    }
}