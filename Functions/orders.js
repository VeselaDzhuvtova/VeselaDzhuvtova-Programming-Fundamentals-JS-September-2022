function orders(product, quantity) {

    let totalPrice = 0;
    let price = 0;
    switch (product) {
        case 'coffee':
            price = 1.50;
            break;
        case 'water':
            price = 1.00;
            break;
        case 'coke':
            price = 1.40;
            break;
        case 'snacks':
            price = 2.00;
            break;
    }
    totalPrice = quantity * price;
    console.log (totalPrice.toFixed(2));
}
orders('water', 5);