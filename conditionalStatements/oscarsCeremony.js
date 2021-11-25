function oscarsCeremony(input) {
    let hallRent = Number(input[0])
    let statues = hallRent * 0.7
    let catering = statues * 0.85
    let sound = catering / 2
    let totalcost = hallRent + statues + catering + sound
    console.log(totalcost.toFixed(2));
}
oscarsCeremony(["3500"])