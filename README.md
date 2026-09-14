# Ad Astra 🚀

This is a solution to the **"Ad Astra"** problem from the **JavaScript Fundamentals** course at Software University (SoftUni).

## 📝 Problem Description
The program receives a single text string containing information about food products, their expiration dates, and calories, separated by specific symbols (`|` or `#`).

The main goals are:
1. Extract valid food information using Regular Expressions (RegEx).
2. Calculate the total calories of the available food items.
3. Determine how many days the food will last, based on a daily intake of **2000 kcal**.
4. Print the detailed information for each product to the console.

## 🛠️ Tech Stack
- **JavaScript (ES6+)**
- **Regular Expressions (RegEx)**
- Node.js

## 💻 How It Works
The project utilizes the following regular expression for data validation:
`/[|#]([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/g`

Upon successful matching, the data is formatted and printed as follows:
`Item: {name}, Best before: {date}, Nutrition: {calories}`
