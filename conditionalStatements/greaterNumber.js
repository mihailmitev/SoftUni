function greaterNumber(input){
let aa = Number(input[0])
let bb = Number(input[1])
if (aa > bb) {
    console.log(aa);
} else {
    console.log(bb);
}

}
greaterNumber(["5", "3"])
greaterNumber(["3", "5"])
greaterNumber(["10", "10"])
greaterNumber(["-5", "5"])