function breadBakery(input) {
    let energy = 100;
    let coins = 100;
    let events = input.split('|');

    for (const event of events) {
        let eventArr = event.split('-');
        let name = eventArr[0];
        let value = Number(eventArr[1]);

        if (name == 'rest') {
            // energy = Math.min(energy + value, 100)
            let gainedEnergy = Math.min(value, 100 - energy)

            energy += value;
            if (energy > 100) {
                energy = 100;
            }
            console.log(`You gained ${gainedEnergy} energy.`);
            console.log(`Current energy: ${energy}.`);
        } else if (name == 'order') {
            if (energy >= 30){
            energy -= 30;
            coins += value;
            console.log (`You earned ${value} coins.`);
            }  else {
                energy += 50;
                console.log('You had to rest!');
            }
        } else {
            if (coins >= value) {
                coins -= value;
                console.log(`You bought ${name}.`);
            } else {
                console.log(`Closed! Cannot afford ${name}`);
                break;
            }
        }
    }
    console.log('Day completed!');
    console.log(`Coins ${coins}`);
    console.log(`Energy ${energy}`);
}
breadBakery('rest-2|order-10|eggs-100|rest-10')