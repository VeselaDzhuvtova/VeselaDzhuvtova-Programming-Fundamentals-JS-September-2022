function storeProvision (current, delivery) {

    let productStore = {};
    let currentStoreLength = current.length;
    let deliveryLength = delivery.length;

    for (let i = 0; i < currentStoreLength; i += 2) {
        let product = current[i];
        productStore[product] = Number(current[i + 1]);
    }
for (let i = 0; i < deliveryLength; i += 2) {
    let product = delivery[i];

    if (!productStore.hasOwnProperty(product)) {
        productStore[product] = 0;
    }
    productStore[product] += Number(delivery[i + 1]);
}
for (let product in productStore) {
    console.log(`${product} -> ${productStore[product]}`);
}

}
storeProvision ([ 

    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' 
    
    ],[ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ] )