function wordsTracker(wordsArray) {

    const words = wordsArray.shift().split(' ');//изрязваме първия стринг
    let result = {};//празен обект

    for (const word of words) {// минаваме през this и sentence 
        result[word] = 0;//this и sentence имат по 0 съвпадения
    }
    for (const word of wordsArray) {// минаваме през останалите думи в масива
        if (result.hasOwnProperty(word)) {//проверяваме дали думата я има в масива
            result[word]++;//ако я има увеличаваме брояча.
        }
    }
    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);//подрежда резултата от най-голямото към най-малкото

    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);

    }
}
wordsTracker(['this sentence',
    'In', 'this', 'sentence', 'you',
    'have', 'to', 'count', 'the',
    'occurrences', 'of', 'the', 'words',
    'this', 'and', 'sentence', 'because',
    'this', 'is', 'your', 'task'])