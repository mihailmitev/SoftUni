function bill(input){
  
    let customerPays= Number(input[0]);
    let tipOfWaiter = (customerPays * 10) / 100;
    let totalSumWithTip = customerPays + tipOfWaiter;
    console.log(`Waiter tip 10%: ${tipOfWaiter.toFixed(2)}€ Total sum with tip: ${totalSumWithTip.toFixed(2)}€`);
    
}
bill(['5'])
