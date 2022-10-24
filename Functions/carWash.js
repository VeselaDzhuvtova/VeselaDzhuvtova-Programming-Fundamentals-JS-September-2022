function carWash(input) {
  
    let sum = 0;
    
    for (let command of input) {

        if (command == 'soap') {
            sum += 10;
        } else if (command == 'water') {
            sum += sum * 0.2;
        } else if (command == 'vacuum cleaner') {
            sum += sum * 0.25;
        } else if (command == 'mud') {
            sum *= 0.9;
        }

    }
    console.log(`The car is ${sum.toFixed(2)}% clean.`)
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])