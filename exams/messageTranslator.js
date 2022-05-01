function messageTranslator(input) {
    let numOfMessages = Number(input.shift())
    let pattern = /(?<command>![A-Z][a-z{3,}]+!):(?<message>\[[A-Za-z{8,}]+\])/gm
    let arrayOne = []
    while (numOfMessages > 0) {
        let message = input.shift()
        let regex = pattern.exec(message)
    
        numOfMessages --
        if(regex != null){
            let product = regex.groups.command
            let message = regex.groups.message
            let showProduct = product.substring(1, product.length-1)
            let cutMessage = message.substring(1, message.length-1)
            let showNumsNow = ''
            for (const ch of cutMessage) {
                showNumsNow = ch.charCodeAt()
                arrayOne.push(showNumsNow)
                
            }
            console.log(`${showProduct}: ${arrayOne.join(' ')}`);
          
        } else{
            console.log(`The message is invalid`);
        }
    }
}
messageTranslator(["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"
])
messageTranslator(["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"])
// let coolness = 0;
// let chars = emoji.slice(2, -2);
// console.log(chars);

// for (let ch of chars) {
//   coolness += ch.charCodeAt();
