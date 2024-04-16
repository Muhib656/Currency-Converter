#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

let currency: any = {
    USD : 1, // Base Currency
    EUR : 0.94,
    AED : 3.67,
    GBP : 0.8,
    INR : 83.61,
    CAD : 1.38,
    AUD : 1.54,
    PKR : 278
}

let user_answer = await inquirer.prompt(
    [
        {
            name : "from",
            type : "list",
            message : (chalk.green("Select your currency from:")),
            choices : ["USD", "EUR", "AED", "GBP", "INR", "CAD", "AUD", "PKR"]
        },

        {
            
            name : "to",
            type : "list",
            message : (chalk.green("Select your currency to:")),
            choices : ["USD", "EUR", "AED", "GBP", "INR", "CAD", "AUD", "PKR"]
        },

        {
            
            name : "amount",
            type : "number",
            message : (chalk.green("Enter Amount:"))
        }
    ]
)

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount

console.log(Math.round(convertedAmount));
