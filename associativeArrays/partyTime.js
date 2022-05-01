// function solve(input) {
//     let vipInvites = new Set()
//     let regularInvites = new Set()
//     while (input[0] != 'PARTY') {
//         let guest = input.shift()
//         if (Number.isNaN(Number(guest[0]))) {
//             regularInvites.add(guest)
//         } else {
//             vipInvites.add(guest)
//         }

//     }
//     for (let guest of input) {
//         vipInvites.delete(guest)
//         regularInvites.delete(guest)
//     }
//     console.log(regularInvites.size + regularInvites.size);
//     for (let guest of vipInvites) {
//         console.log(guest)
//     }
//     for (let guest of regularInvites) {
//         console.log(guest)
//     }
// }
function partyTime(input) {
    let vipGuestsList = [];
    let regularGuestsList = [];
    let reservation = input.shift();
    while (reservation !== 'PARTY') {
        if (/^\d+/.test(reservation)) {
            vipGuestsList.push(reservation);
        } else {
            regularGuestsList.push(reservation);
        }
        reservation = input.shift();
    }
    for (let guest of input) {
        if (vipGuestsList.indexOf(guest) >= 0) {
            vipGuestsList.splice(vipGuestsList.indexOf(guest), 1);
        }
        if (regularGuestsList.indexOf(guest) >= 0) {
            regularGuestsList.splice(regularGuestsList.indexOf(guest), 1);
        }
    }
    console.log(vipGuestsList.length + regularGuestsList.length);
    vipGuestsList.forEach(el => console.log(el));
    regularGuestsList.forEach(el => console.log(el));
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])