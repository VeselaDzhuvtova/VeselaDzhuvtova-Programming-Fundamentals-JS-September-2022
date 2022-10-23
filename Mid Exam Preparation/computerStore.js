function computerStore(input) {
    let command = input.shift();
    let totalPrice = 0;
    let discount = 0;
    let taxes = 0;

    while (command != 'regular' && command != 'special') {
        price = Number(command);
        if (price < 0) {
            console.log('Invalid price!') 
            command = input.shift();
            continue;
        }
        totalPrice += price;
        command = input.shift();
    }
    if (totalPrice > 0) {
        taxes = totalPrice * 0.2;
    }
    if (command === 'special') {
        discount = (totalPrice + taxes) * 0.1;
    }
    totalPrice = totalPrice + taxes - discount;

    if (totalPrice === 0) {
        console.log('Invalid order!')
    } else {
        console.log('Congratulations you\'ve just bought a new computer!');
        console.log(`Price without taxes: ${(totalPrice - taxes + discount).toFixed(2)}$`)
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPrice.toFixed(2)}$`)
    }
} computerStore 
// ([ 

//     '1023',  
    
//     '15',  
    
//     '-20', 
    
//     '-5.50', 
    
//     '450',  
    
//     '20',  
    
//     '17.66',  
    
//     '19.30', 'regular' 
    
//     ])
// (['regular'])
([

    '1050',

    '200',

    '450',

    '2',

    '18.50',

    '16.86',

    'special'

]) 