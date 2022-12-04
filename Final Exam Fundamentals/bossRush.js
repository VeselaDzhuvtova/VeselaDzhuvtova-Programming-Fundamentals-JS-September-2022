function bossRush(input) {
    let num = input.shift('');

    for (let i = 0; i < num; i++) {
        let lines = input.shift();
        let pattern = /\|(?<Name>[A-Z]{4,})\|\:\#(?<Title>[A-Za-z]+\s[A-Za-z]+)\#/;
        let match = lines.match(pattern)
        if (match) {
            let name = match.groups['Name'];
            let title = match.groups["Title"];
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log("Access denied!");
        
        }
    }
}
bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#']);


