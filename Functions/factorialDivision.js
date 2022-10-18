function factorialDivision (first, second) {
    let firstResult = 1;
    let secondResult = 1;


    for (let i = 1; i < first; i++) {// 1*2 = 2 * 3 = 6 *4 = 24*5 = 120
        firstResult = firstResult * (i + 1);
    }
    for (let i = 1; i < second; i++) {
        secondResult = secondResult * (i + 1);
    }
    console.log (firstResult / secondResult)
}
factorialDivision (5, 2)