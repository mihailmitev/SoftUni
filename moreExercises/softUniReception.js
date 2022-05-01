function softUniReception(input) {
   
        let emp1Eff = +input.shift();
        let emp2Eff = +input.shift();
        let emp3Eff = +input.shift();
        let people = +input.shift();
        let neededHours = 0;
        let answerPerHour = emp1Eff + emp2Eff + emp3Eff;
       
        while (people > 0) {
          people -= answerPerHour;
          neededHours++;
       
          if (neededHours % 4 === 0) {
            neededHours++;
          }
        }
       
        console.log(`Time needed: ${neededHours}h.`);
    }
//     let students = array.pop()
//     let sum = 0
//     let timeNeeded = 0

//     for (let i = 0; i < array.length; i++) {
//         sum += Number(array[i])

//     }

//     timeNeeded = Math.ceil(students / sum)
//     if (timeNeeded >3 && timeNeeded <6) {
//         timeNeeded++
//     } else if (timeNeeded > 7) {
//         timeNeeded += 2
//     }

//     console.log(`Time needed: ${timeNeeded}h.`);
// }
softUniReception(['1', '2', '3', '45'])
softUniReception(['5', '6', '4', '20'])
softUniReception(['3', '2', '5', '40'])
