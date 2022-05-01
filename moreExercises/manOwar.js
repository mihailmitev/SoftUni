function solve(input = []) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());
    let needRepair = 0;
    let command;

    while ((command = input.shift()) !== 'Retire') {

        let currComand = command.split(' ')

        switch (currComand[0]) {
            case 'Fire':
                let index = +currComand[1];
                let damage = +currComand[2];
                if (index <= warShip.length) {
                    let attack = warShip[index] - damage;
                    warShip[index] = attack;
                    if (warShip[index] <= 0) {
                        console.log('You won! The enemy pirateShip has sunken.');
                        return;
                    }
                }
                break;

            case 'Defend':
                let startIndex = +currComand[1];
                let endIndex = +currComand[2];
                let attackPower = +currComand[3];

                if (startIndex <= pirateShip.length && endIndex <= pirateShip.length) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= attackPower;

                        if (pirateShip[i] <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`);
                            return;
                        }
                    }
                }
                break;
            case 'Repair':
                let repairIndex = +currComand[1];
                let health = +currComand[2];
                if (repairIndex <= pirateShip.length) {
                    pirateShip[repairIndex] += health;
                    if (pirateShip[repairIndex] > maxHealth) {
                        pirateShip[repairIndex] = maxHealth;

                    }
                }
                break;

            case 'Status':
                for (let i = 0; i < pirateShip.length; i++) {
                    const element = pirateShip[i];
                    if (element < maxHealth * 0.20) {
                        needRepair++;
                    }
                }
                console.log(`${needRepair} sections need repair.`);
        }
    }
    let sumWarShip = warShip.reduce((a, b) => a + b);
    let sumPirate = pirateShip.reduce((acc, value) => acc + value);
    console.log(`Pirate ship status: ${sumPirate}`);
    console.log(`Warship status: ${sumWarShip}`);
}
solve(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
