function experienceGaining(input) {
    let expForUnlock = input.shift();
    let countOfBattles = input.shift();
    let inputLength = input.length;
    let exp = 0;
    let battles = 0;

    for (let i = 0; i < inputLength; i++) {
        let currentExp = input[i];
        let count = [i + 1];

        if (count % 3 === 0 && i != 0) {
            currentExp *= 1.15;
        }
        if (count % 5 === 0 && i != 0) {
            currentExp *= 0.9;
        }
        if (count % 15 === 0 && i != 0) {
            currentExp *= 1.05;
        }
        exp += currentExp;
        battles++;
    }
    if (exp >= expForUnlock) {
        console.log(`Player successfully collected his needed experience for ${battles} battles.`)
    } else {
        console.log(`Player was not able to collect the needed experience, ${(expForUnlock - exp).toFixed(2)} more needed.`)
    }
}
experienceGaining([500, 5, 50, 100, 200, 100, 30])