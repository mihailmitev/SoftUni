function factory(input) {
    let biscuitPerDay = Number(input.shift())
    let workers = Number(input.shift())
    let competiveFactory = Number(input.shift())
    let month = 30
    let total = 0
    for (i = 1; i <= month; i++) {
        if (i % 3 === 0) {
            total += Math.floor(biscuitPerDay * 0.75 * workers)
            
        } else{
            total += biscuitPerDay * workers
        }
        
    }
    console.log(`You have produced ${total} biscuits for the past month.`);
    
    if(total > competiveFactory){
        let percent = (total - competiveFactory) / competiveFactory * 100
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`)
    } else{
        let percent = (competiveFactory - total) / competiveFactory * 100
        console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`)
    }
}
factory(["78",
    "8",
    "16000"
])
factory(["65",
"12",
"26000"])
factory(["163",
"16",
"67020"])
