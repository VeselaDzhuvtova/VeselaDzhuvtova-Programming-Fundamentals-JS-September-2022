function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let arr = input.split('|');
    let rooms = 0;

    for (let line of arr) {
        line = line.split(' ');
        let command = line[0];
        rooms++;

        switch (command) {
            case 'potion':
                let healthPlus = Number(line[1]);
                let totalHealth = (health + healthPlus > 100) ? 100 : health + healthPlus;
                console.log(`You healed for ${totalHealth - health} hp.`);
                health = totalHealth;
                console.log((`Current health: ${health} hp.`))
                break;
            case 'chest':
                let bitcoinsQuantity = Number(line[1]);
                bitcoins += bitcoinsQuantity;
                if (health > 0) {
                    console.log(`You found ${bitcoinsQuantity} bitcoins.`);
                }
                break;
            default:
                let monsterAttack = Number(line[1]);
                health -= monsterAttack;

                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else if (health <= 0) {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${rooms}`);
                }
        }
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}


muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")

// function muOnline(input) {
//     let health = 100;
//     let bitCoins = 0;
//     let array = input.split('|');
//     let roomCounter = 0;

//     for (const element of array) {
//         let tokens = element.split(' ');
//         let command = tokens[0];
//         roomCounter++;

//         if (command === 'potion') {
//             let addHealth = Number(tokens[1]);
//             let newHealth = (health + addHealth > 100) ? 100 : health + addHealth;
//             console.log(`You healed for ${newHealth - health} hp.`);
//             health = newHealth;
//             console.log(`Current health: ${health} hp.`);
//         }
//         else if (command === 'chest') {
//             let bitCoinsAmount = Number(tokens[1]);
//             bitCoins += bitCoinsAmount;
//             if (health > 0) {
//                 console.log(`You found ${bitCoinsAmount} bitcoins.`);
//             }
//         }
//         else {
//             let monsterAttack = Number(tokens[1]);
//             health -= monsterAttack;
//             if (health > 0) {
//                 console.log(`You slayed ${command}.`);
//             } else if (health <= 0) {
//                 console.log(`You died! Killed by ${command}.`);
//                 console.log(`Best room: ${roomCounter}`);
//             }
//         }
//     }
//     if (health > 0) {
//         console.log("You've made it!");
//         console.log(`Bitcoins: ${bitCoins}`);
//         console.log(`Health: ${health}`);
//     }
// }
// muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");