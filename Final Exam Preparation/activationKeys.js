function activationKeys(input) {

    // подредба на input и result информацията
    // let [activationKeys, ...instructions] = input;

    let activationKey = input.shift();
    let instructions = input.slice();

    // минаваме през инструкциите
    let instruction = instructions.shift();
    while (instruction != 'Generate') {
        // приложи инструкцията
        // let [name, ...arguments] = instructions;
        let arguments = instruction.split('>>>')
        let instructionName = arguments.shift();

        switch (instructionName) { // слагаме {} на case, за да можем да преизползваме променливите в следващите case-ове
            case 'Contains': {
                let substring = arguments[0];
                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}`)
                } else {
                    console.log('Substring not found!')
                }
                break;
            }
            case 'Flip': {
                let casing = arguments[0];
                let startIndex = arguments[1];
                let endIndex = arguments[2];

                // взимаме частта, която ни трябва за Upper/Lower
                let part = activationKey.substring(startIndex, endIndex);
                // трансформираме я в Upper/Lower според това какъв е casing-a (Upper/Lower)
                let newPart = casing == 'Upper' ? part.toUpperCase() : part.toLowerCase();
                // заменяме тази част с новата, като това ще ни възпроизведе нов string, запаметен в activationKey
                activationKey = activationKey.replace(part, newPart);
                console.log(activationKey)
                break;
            }
            case 'Slice': {
                // взимаме отново старов и краен индекс
                let startIndex = arguments[0];
                let endIndex = arguments[1];
                let substring = activationKey.substring(startIndex, endIndex)
                activationKey = activationKey.replace(substring, '');
                console.log(activationKey);
                break;
            }
        }       
        // вземи следващата инструкция
        instruction = instructions.shift();
    }
    // принтиране на генерарания активиращ ключ
    console.log(`Your activation key is: ${activationKey}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);