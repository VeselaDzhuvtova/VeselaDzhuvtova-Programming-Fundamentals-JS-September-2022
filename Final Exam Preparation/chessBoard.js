function chessBoard(input) {
    let size = input;
    let currColor = 'black';
    let prevColor = '';

    console.log('<div class="chessboard">');

    for (let row = 1; row <= size; row++) {
        console.log('  <div>');

        for (let colums = 1; colums <= size; colums++) {
            console.log(`    <span class="${currColor}"></span>`);
            prevColor = currColor;
            currColor = prevColor === 'black' ? 'white' : 'black';
        }
        console.log('  </div>');

        if (size % 2 === 0) {
            prevColor = currColor;
            currColor = prevColor === 'black' ? 'white' : 'black';
        }
    }
    console.log(' </div>');
}