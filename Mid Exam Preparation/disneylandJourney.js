function disneylandJourney(input) {

    let price = input[0];
    let numOfMonths = input[1];
    let saved = 0;

    for (let i = 1; i <= numOfMonths; i++) {
        if (i !== 1 && i % 2 !== 0) {
            saved *= 0.84;
        }
        if (i % 4 === 0) {
            saved *= 1.25;
        }
        saved += price * 0.25;
    }

    if (saved >= price) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(saved - price).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(price - saved).toFixed(2)}lv. more.`);
    }
}
disneylandJourney(['3265', '3']);