function firstAndLastKNumbers (input) {
    let rotation = input.shift();

    let first = input.slice(0, rotation);
    let second = input.slice(- rotation)
    
        console.log(first.join(' '));
        console.log(second.join(' '));
    
}
firstAndLastKNumbers ([2,  

    7, 8, 9])