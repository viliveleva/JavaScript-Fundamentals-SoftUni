function solve(input) {
    let message = input.shift();
    let line = input.shift();
    while (line != "Reveal") {
        let [command, firstArgument, secondArgument] = line.split(":|:");
        let hasError = false;
        switch (command) {
            case "InsertSpace":
                let index = Number(firstArgument);
                message = message.substring(0, index) + " " + message.substring(index);
                break;
            case "Reverse":

                if (message.includes(firstArgument)) {
                    message = message.replace(firstArgument, "");
                    let reversedSubstring = firstArgument.split('').reverse().join('')
                    message += reversedSubstring

                } else {
                    console.log(`error`);
                    hasError = true;
                }
                break;
            case "ChangeAll":

                message = message.split(firstArgument).join(secondArgument);
                break;
        }



        if (!hasError) {
            console.log(message);
        }
        line = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}

solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);