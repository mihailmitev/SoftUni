function worldSwimmingRecord(input) {
    let recordInSec = Number(input[0]);
    let lenghtInMeters = Number(input[1]);
    let swimInSecForMeter = Number(input[2]);
    let swimIvan = lenghtInMeters * swimInSecForMeter;
    let every15Meters = Math.floor(lenghtInMeters / 15);
    let addSeconds = every15Meters * 12.5;
    let sumOfTime = swimIvan + addSeconds;
    let unSufficiantTime = sumOfTime - recordInSec

    if (sumOfTime < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${sumOfTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${unSufficiantTime.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67",
    "3017",
    "5.03"
])