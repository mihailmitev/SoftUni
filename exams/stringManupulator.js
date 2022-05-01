function stringManipulator(input) {
    let message = input.shift();
    let line = input.shift();
    while (line != "End") {
        let tokens = line.split(' ');
        let command = tokens[0];
        switch (command) {
            case "Translate": {
                let subString = tokens[1];
                let replacement = tokens[2];
                message = message.split(subString).join(replacement);
                console.log(message);
                break;
            }
            case "Includes": {
                tokens[1] = tokens[1]
                if (message.includes(tokens[1])) {
                    console.log(`True`)
                } else {
                    console.log(`False`)
                }
                break;
            }
            case "Start": {
                if(message.startsWith(tokens[1])){
                    console.log(`True`);
                } else{
                    console.log(`False`);
                }
                break;
            }
            case "Lowercase": {
                console.log(message.toLowerCase());
                break;
            }
            case "FindIndex": {
             
                console.log(message.lastIndexOf(tokens[1]));      
               break;
            }
            case "Remove": {
                let removeText = message.substring(10)
                console.log(removeText);

        break;
            }




        }


        line = input.shift()
    }

}
stringManipulator(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"
])
// stringManipulator(["*S0ftUni is the B3St Plac3**",
// "Translate 2 o",
// "Includes best",
// "Start the",
// "Lowercase",
// "FindIndex p",
// "Remove 2 7",
// "End"])
