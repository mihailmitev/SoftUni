function solve(commands) {
 
    let currentArray = commands
        .shift()
        .split(' ')
        .map(Number);
    // console.log(currentArray);
 
    for (let i = 0; i < commands.length; i++) { // въртим по броя на командите
        let commandsLineArray = [currentCommand, index1, index2] = commands[i].split(' '); // взимаме съответната команда, индекс1 и индекс2
        firstNum = Number(index1);
        secondNum = Number(index2);
        //console.log(currentCommand, index1, index2);
 
        if (currentCommand === 'swap') {
            swap();
        }
 
        else if (currentCommand === 'multiply') {
            multiply()
        }
 
        else if (currentCommand === 'decrease') {
            decrease();
        }
        else if (currentCommand === 'end') {
            end();
        }
 
 
        function swap() {
            // [arr[0], arr[1]] = [arr[1], arr[0]];
            [currentArray[firstNum], currentArray[secondNum]] = [currentArray[secondNum], currentArray[firstNum]];
            console.log(currentArray);
        }
 
        function multiply(firstNum, secondNum) {
            result = currentArray[firstNum] * currentArray[secondNum];
            currentArray[1] = result;
            console.log(currentArray);
        }
 
        function decrease() {
            for (let numbers of currentArray) {
                newNumbers = numbers - 1;
                newNumbers++;
                let newArray = [];
                newArray.push(newNumbers);
                console.log(newNumbers);
            }
        }
        function end() {
            if (currentCommand === "end") { 
              return;
            }
            
        }
    }
 


}
solve(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end'])