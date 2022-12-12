function emailValidator(input) {

    let email = input.shift();

    for (const currentLine of input) {
        if (currentLine === 'Complete') { break }
        const [command, a] = currentLine.split(' ');

        if (command === 'Make') {
            if (a === 'Upper') {
                email = email.toLocaleUpperCase();
            } else {
                email = email.toLocaleLowerCase();
            }
            console.log(email);
        } else if (command === 'GetDomain') {
            console.log(email.substring(email.length - Number(a)));
        } else if (command === 'GetUsername') {
            const index = email.indexOf('@');
            if (index === -1) {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            } else {
                console.log(email.substring(0, index));
            }
        } else if (command === 'Replace') {
            while (email.includes(a)) {
                email = email.replace(a, '-');
            }
            console.log(email);
        } else if (command === 'Encrypt') {
            const symbolsASCII = [];
            for (const char of email) {
                symbolsASCII.push(char.charCodeAt());
            }
            console.log(symbolsASCII.join(' '));
        }
    }
}