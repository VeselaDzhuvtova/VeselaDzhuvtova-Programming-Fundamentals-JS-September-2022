function theImitationGame(arrInput) {

    let arr = arrInput.slice();
    let message = arr.shift();
    let tempMessage = '';

    let currentLine = arr.shift();//ChangeAll|z|l

    while (currentLine !== 'Decode') {

        let tokens = currentLine.split('|');

        let command = tokens[0];

        switch (command) {
            case 'Move':
                let lettersNumber = Number(tokens[1]);
                let lettersToMove = message.substring(0, lettersNumber);// zzH
                tempMessage = message.replace(lettersToMove, '');// e
                tempMessage += lettersToMove;// e += zzH = ezzH
                message = tempMessage;
                break;
            case 'Insert':
                let index = Number(tokens[1]);
                let value = tokens[2];

                tempMessage = message.split('');//2
                tempMessage.splice(index, 0, value);//o
                message = tempMessage.join('');//zzoHe
                break;
            case 'ChangeAll':
                let substring = tokens[1];
                let replacement = tokens[2];

                while (message.includes(substring)) {
                    tempMessage = message.replace(substring, replacement);
                    message = tempMessage;
                }
                break;
        }
        currentLine = arr.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}
theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])