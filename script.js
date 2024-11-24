import { quotesArray } from "./quotes";
console.log("Welcome to Motivation School!")
do
{
    const quote_length = prompt("Would you like a LONG, MEDIUM, SHORT motivational quote?")
}
while (quote_length.toUpperCase() == 'LONG' || quote_length.toUpperCase() == 'MEDIUM' || quote_length.toUpperCase() == 'SHORT')

do
{
    const number = prompt("How many motivational hits do you need?")
}
while (isInteger(number) & (number > 0)) 

for (let i = 0; i < number; i++) {
    random_quote = Math.floor(Math.random() * quotesArray.length())
    console.log(`${i}) ${quotesArray[random_quote].quote} - ${quotesArray[random_quote].author}`)
}