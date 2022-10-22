function tseamAccount(input) {

    let collect = input.shift();
    let gameList = collect.split(' ');
    let currentLine = input.shift();

    while (currentLine != 'Play!') {
        let [command, game] =currentLine.split(' ');
        if (command === 'Install') {
            if (!gameList.includes(game)) {
                gameList.push(game);
            }
        } else if (command === 'Uninstall') {
            if (gameList.includes(game)) {
                let gameIndex = gameList.indexOf(game);
                gameList.splice(gameIndex, 1);
            }
        } else if (command === 'Update') {
            if (gameList.includes(game)) {
                let gameIndex = gameList.indexOf(game);
                let currentGame = gameList.splice(gameIndex, 1).join('');
                gameList.push(currentGame);
            }
        } else if (command === 'Expansion') {
            let [gameExpansion, exp] = game.split('-');
            if (gameList.includes(gameExpansion)) {
                let index = gameList.indexOf(gameExpansion);
                let expansion = gameExpansion + ':' + exp;
                gameList.splice(index + 1,0,expansion);
            }
        }
        currentLine = input.shift();
    }
    console.log(gameList.join(' '));
}
// CS CS:Go LoL Diablo 
tseamAccount(['CS WoW Diablo',

    'Install LoL',

    'Uninstall WoW',

    'Update Diablo',

    'Expansion CS-Go',

    'Play!'])