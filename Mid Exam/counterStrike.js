function counterStrike(input) {
    let energy = Number(input.shift());
    let winsCount = 0;

    for(let command of input){
        if (command !== 'End of battle'){
            let health = Number(command);
            if (energy - health < 0) {
                console.log(`Not enough energy! Game ends with ${winsCount} won battles and ${energy} energy`);
            }
            energy -= health;
            winsCount++;
        } else {
            console.log(`Won battles: ${winsCount}. Energy left: ${energy}`)
        }
        if (winsCount % 3 === 0) {
            energy += winsCount;
        }
    }
}

counterStrike
    (["200", 

    "54", 

    "14", 

    "28", 

    "13", 

    "End of battle"])
    // (["100",

    //     "10",

    //     "10",

    //     "10",

    //     "1",

    //     "2",

    //     "3",

    //     "73",

    //     "10"])