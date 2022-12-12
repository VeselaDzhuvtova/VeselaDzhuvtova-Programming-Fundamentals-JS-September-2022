function theRace(input) {

    let arr = input;
    for (let line of arr) {
        let regExp = /([#$%*&])([A-Za-z]+)\1=(\d+)!!(.+)/g;
        let isValidName = regExp.exec(line);
        if (isValidName) {
            let name = isValidName[2];
            let length = Number(isValidName[3]);
            let code = isValidName[4];
            let isValid = checkLength(length, code);
            if (isValid) {
                let newCode = decryptCode(length, code);
                return printResult(name, newCode);
            }
        }
        else {
            console.log("Nothing found!");
        }
    }
    function checkLength(length, code) {
        if (length != code.length) {
            console.log("Nothing found!");
            return false;
        }
        return true;
    }
    function decryptCode(length, code) {
        let result = '';
        for (let i of code) {
            let symCode = i.charCodeAt() + length;
            result += String.fromCharCode(symCode);
        }
        return result;
    }
    function printResult(name, code) {
        console.log(`Coordinates found! ${name} -> ${code}`);
    }
}
theRace(["%GiacomoAgostini%=7!!hbqw",
    "&GeoffDuke*=6!!vjh]zi",
    "JoeyDunlop=10!!lkd,rwazdr",
    "Mike??Hailwood=5!![pliu",
    "#SteveHislop#=16!!df%TU[Tj(h!!TT[S"])
