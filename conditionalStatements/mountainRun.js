function mountainRun(input) {
    let recordInSec = Number(input[0])
    let distanceInMet = Number(input[1])
    let climbForSec = Number(input[2])
    let georgiMustClimb = distanceInMet * climbForSec
    let penalty = Math.floor(distanceInMet / 50) * 30
    let totalTime = georgiMustClimb + penalty
    if (totalTime < recordInSec) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${Math.abs(recordInSec-totalTime).toFixed(2)} seconds slower.`);
    }
}
mountainRun(["1377",
    "389",
    "3"
])