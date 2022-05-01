function messagesManager(input) {
    let capacity = Number(input.shift())
    let task = input.shift()
    let myObj = {
      
    }
    while (task != "Statistics") {
        let splitnow = task.split('=')
        let command = splitnow[0]
        if(command == 'Add'){
             user = splitnow[1]
             sent = splitnow[2]
         received = splitnow[3]
            Object.assign(myObj,{user, sent, received})
            
        
        } else if(command == 'Message'){
            let sender = splitnow[1]
            let receiver = splitnow[2]
           if(Object.values(myObj)[0] == sender && Object.values(myObj)[0] == receiver){
            myObj[sender]
           }
           
        } 
            



        task = input.shift()
    }
    
}
messagesManager(["10",
    "Add=Berg=9=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Add=Mark=5=4",
    "Statistics"
])