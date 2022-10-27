function employees(input) {
    class Person {
        constructor (name) {
            this.name = name;
        }
    }

    for (const line of input) {
        let currentLine = line.split(', ');
        let toStr = currentLine.join();
        let toStrLength = toStr.length;
        for (let i = currentLine; i <= toStr; i++) {
            console.log(`Name: ${currentLine[0]} -- Personal Number: ${toStrLength}`)
        }
    }
}
employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])