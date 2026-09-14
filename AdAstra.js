//(\/|#)([A-Za-z])+\1([0-9]\/|#[0-9]\/|#[0-9]\/|#)(\d)\1/g;

// ([A-Za-z\s]+)
// (\d{2}\/\d{2}\/\d{2})
//(\d+)

function solve(text) {
    let total = 0;
    let result = [];
    let pattern = /([#|])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/g;
    let match = pattern.exec(text);
    while (match != null) {
        //console.log(match);
        let name = match[2];
        let date = match[3];
        let calories = Number(match[4]);
        //console.log(name, date, calories);

        total += calories;
        result.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
        match = pattern.exec(text);
    }
    let days = Math.floor(total / 2000);
    //console.log(total);
    //console.log(result);
    console.log(`You have food to last you for: ${days} days!`);
    for (let line of result) {
        console.log(line);
    }
}