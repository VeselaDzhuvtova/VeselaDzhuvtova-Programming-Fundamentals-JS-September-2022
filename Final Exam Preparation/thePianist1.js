function thePianist(input) {
    let numOfPieces = Number(input.shift());
    let list = {};

    for (let i = 0; i < numOfPieces; i++) {
        let [name, composer, key] = input.shift().split('|');
        list[name] = {
            composer,
            key,
        }
    }

    while (input[0] !== 'Stop') {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let name = tokens[1];
        if (command === 'Add') {
            if (list.hasOwnProperty(name)) {
                console.log(`${name} is already in the collection!`);
            } else {
                list[name] = {
                    composer: tokens[2],
                    key: tokens[3],
                }
                console.log(`${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`);
            }
        } else if (command === 'Remove') {
            if (list.hasOwnProperty(name)) {
                delete list[name];
                console.log(`Successfully removed ${name}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            if (list.hasOwnProperty(name)) {
                list[name].key = tokens[2];
                console.log(`Changed the key of ${name} to ${tokens[2]}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        }
    }
    let result = Object.entries(list);
    for (let [nameOfSong, info] of result) {
        console.log(`${nameOfSong} -> Composer: ${info.composer}, Key: ${info.key}`);
    }
}
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])