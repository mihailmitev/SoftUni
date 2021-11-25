function  aluminumJoinery([arg1,arg2,arg3]){
 
    let numOfJoinery = Number(arg1);
    let kindOfJoiner = arg2;
    let delivery = arg3;
    let price = Number ;
 
    if (kindOfJoiner == "90X130" && numOfJoinery<= 30){
        price = 110 * numOfJoinery;
    } else if (kindOfJoiner == "90X130" && numOfJoinery > 30 && numOfJoinery <= 60){
        price = (110 - 110 * 0.05) * numOfJoinery;
    } else if (kindOfJoiner == "90X130" && numOfJoinery > 60){
        price = (110 - 110 * 0.08) * numOfJoinery;
}
     if (kindOfJoiner == "100X150" && numOfJoinery<= 40){
        price = 140 * numOfJoinery;
    }else if (kindOfJoiner == "100X150" && numOfJoinery > 40 && numOfJoinery <= 80){
        price = (140 - 140 * 0.06) * numOfJoinery;
    } else if (kindOfJoiner == "100X150" && numOfJoinery > 80){
        price = (140 - 140 * 0.1) * numOfJoinery;
    }
    if (kindOfJoiner == "130X180" && numOfJoinery<= 20){
        price = 190 * numOfJoinery;
    }else if (kindOfJoiner == "130X180" && numOfJoinery > 20 && numOfJoinery <= 50){
        price = (190 - 190 * 0.07) * numOfJoinery ;
    }else if (kindOfJoiner == "130X180" && numOfJoinery > 50){
        price= (190 - 190 * 0.12) * numOfJoinery;
    }
    if (kindOfJoiner == "200X300" && numOfJoinery<= 25){
        price = 250 * numOfJoinery;
    } else if (kindOfJoiner == "200X300" && numOfJoinery > 25 && numOfJoinery <= 50){
        price = (250 - 250 * 0.09) * numOfJoinery ;
    } else if (kindOfJoiner == "200X300" && numOfJoinery > 50){
        price = (250 - 250 * 0.14) * numOfJoinery;
    }
 
if (delivery == "With delivery"){
   price = price + 60}
if (numOfJoinery > 99){
 price -= price* 0.04
}
if(numOfJoinery < 10){
    console.log("Invalid order")
} else {
console.log(`${price.toFixed(2)} BGN`)
}
}