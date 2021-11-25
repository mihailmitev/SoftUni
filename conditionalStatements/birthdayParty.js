function birthdayParty(input) {
    let rent = Number(input)
    let cake = rent * 0.2
    let drinks = cake * 0.55
    let animation = rent / 3
    let sum = rent + cake + drinks + animation
    console.log(sum)
}
birthdayParty(2250)