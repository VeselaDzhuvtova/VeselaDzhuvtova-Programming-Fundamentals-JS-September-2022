function inventory(input) {
    let collect = input.shift();
    let command = input.shift();

    console.log(collect)
    while (command != 'Craft!') {
        let line = command.split();
        let item = line.split();
        command = input.shift();
        console.log(item)


    }
}
inventory
    (['Iron, Wood, Sword',

        'Collect - Gold',

        'Drop - Wood',

        'Craft!'

    ])