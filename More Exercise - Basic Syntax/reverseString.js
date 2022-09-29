function reverseString(input) {

    let someText = String(input);
    let rotate = "";

    for(let i = someText.length - 1; i >= 0; i--) {
        rotate += someText[i]
    }
    console.log(rotate);
}
reverseString("Vesela")