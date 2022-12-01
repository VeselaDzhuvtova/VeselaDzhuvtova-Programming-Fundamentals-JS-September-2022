function plantDiscovery(input) {
    let plantList = {};
    let totalPlants = Number(input.shift());
 
    plantGenerator(input, totalPlants);
 
    let data = input.shift();
 
    while (data !== 'Exhibition') {
        data = data.split(': ');
        let command = data.shift();
 
        switch (command) {
            case 'Rate':
                let [ratePlant, rating] = data.shift().split(' - ');
                rating = Number(rating)
                if (plantList[ratePlant]) {
                    if (plantList[ratePlant].rating == 0) {
                        plantList[ratePlant].rating = rating
                    }
                    plantList[ratePlant].rating = (plantList[ratePlant].rating + rating) / 2
                } else {
                    console.log('error');
                }
                break;
 
            case 'Update':
                let [updatePlant, newRarity] = data.shift().split(' - ');
                if (plantList[updatePlant]) {
                    plantList[updatePlant].rarity = newRarity;
                } else {
                    console.log('error');
                }
                break;
 
            case 'Reset':
                let resetPlant = data.shift();
                if (plantList[resetPlant]) {
                    plantList[resetPlant].rating = 0;
                } else {
                    console.log('error');
                }
                break;
        }
        data = input.shift();
    }
 
 
    console.log('Plants for the exhibition:');
 
    for (const plant in plantList) {
        console.log(`- ${plant}; Rarity: ${plantList[plant].rarity}; Rating: ${(plantList[plant].rating).toFixed(2)}`);
    }
 
    function plantGenerator(input, totalPlants) {
 
        for (let i = 0; i < totalPlants; i++) {
            let [plant, rarity] = input.shift().split('<->');
            rarity = Number(rarity);
            let rating = 0;
            if (!plantList[plant]) {
                plantList[plant] = { rarity, rating };
            } else {
                plantList[plant].rarity = '';
            }
 
        }
    }
}
plantDiscovery (["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])