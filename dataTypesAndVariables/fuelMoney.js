function fuelMoney(distance, passengers, price){
    let fuel = (distance / 100) * 7;
    fuel.toFixed(3);
    fuel += passengers * 0.100;
    let allPrice = fuel * price;
    console.log(`Needed money for that trip is ${allPrice} lv.`)
}
fuelMoney(260, 9, 2.49)