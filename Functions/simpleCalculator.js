function simpleCalculator(a, b, operator) {

    let sum = 0;
    switch (operator) {
        case 'multiply':
            sum = a * b;
            break;
        case 'divide':
            sum = a / b;
            break;
        case 'add':
            sum = a + b;
            break;
        case 'subtract':
            sum = a - b;
            break;
    }
    console.log (sum)
}
simpleCalculator (5,5,'multiply')