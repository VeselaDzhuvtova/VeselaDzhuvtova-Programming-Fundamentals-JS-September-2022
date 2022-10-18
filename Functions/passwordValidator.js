function passwordValidator (pass) {
    
    let digitCounter = 0;
    let passwordLength = pass.length;

    for(let i = 0; i <passwordLength; i++) {
        let char = pass[i].charCodeAt();
        console.log(char)
    }
}
passwordValidator('logIn')