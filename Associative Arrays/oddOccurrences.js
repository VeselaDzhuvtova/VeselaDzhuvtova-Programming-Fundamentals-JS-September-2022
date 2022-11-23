function oddOccurences(words) {

    let resultObject = {};//създаваме обект
    let allWords = words
        .split(' ')
        .map(w => w.toLowerCase());//взимаме ги една по една и ги правим с малки букви

    let allWordsLength = allWords.length;

    for (let i = 0; i < allWordsLength; i++) {
        if (!resultObject.hasOwnProperty(allWords[i])) {// ако думата я няма в масива
            resultObject[allWords[i]] = [];//добави я
        }
        resultObject[allWords[i]].push(i);
    }
    let sorted = Object.entries(resultObject).sort((a,b)=> a - b);//сортираме
    let result = '';//резултатът е равен на празен стринг

    for (const el of sorted) {
        if (el[1].length % 2 !== 0) {
            result+= `${el[0]} `;
        }
    }
    console.log(result)
}
    oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');