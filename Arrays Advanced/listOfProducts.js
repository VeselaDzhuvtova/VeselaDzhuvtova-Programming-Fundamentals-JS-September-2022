function listOfProducts (input) {
    let sort = input.sort();

    for (let i = 0; i < sort.length; i++) {
        console.log(`${i + 1}.${sort[i]}`);
    }
}
listOfProducts (['Potatoes', 'Tomatoes', 'Onions', 'Apples'])