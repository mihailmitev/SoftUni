if (budget <= total){
    console.log(`Target acquired.`);
    console.log(`Club income - ${budget - total} leva.`);
} else if (budget >= total){
    console.log(`We need ${Math.abs(total - budget)} leva more.`);
    console.log(`Club income - ${total.toFixed(2)} leva.`);
}