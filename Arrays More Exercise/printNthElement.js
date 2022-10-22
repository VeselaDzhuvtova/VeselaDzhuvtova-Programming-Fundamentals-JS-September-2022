function printNthElement(input) {

    let step = input[input.length - 1];
    let result = [];

    for (let i = 0; i < input.length - 1; i++) {
        
        if (i % step === 0) {
            result.push(input[i]);
  
        }

    }
    console.log(result.join(' '));
}
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
// (['5', '20', '31', '4', '20', '2'])
// 5 31 20 