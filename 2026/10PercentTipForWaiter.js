function PercentTipForWaiter(input) {
    let price = Number(input[0]);
    let tip = (price * 10) / 100;
    let total = price + tip;
    console.log(`Waiter tip 10%: ${tip.toFixed(2)}€ Total sum with tip: ${total.toFixed(2)}€`);
}
PercentTipForWaiter(['50']);
