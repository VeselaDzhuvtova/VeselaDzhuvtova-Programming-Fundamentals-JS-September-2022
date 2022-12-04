function passwordValidator(input) {
    let pass = input.shift();
    //   console.log(password);
  
    let length = pass.match(/\w{8,}/g);
    let nonChar = pass.match(/[^\W\|_]/g);
    let toUpperCase = pass.match(/[A-Z]/g);
    let toLowerCase = pass.match(/[a-z]/g);
    let digit = pass.match(/d/g);
  
    while (input[0] !== "Complete") {
      let [command, first, second] = input.shift().split(" ");
  
      switch (command) {
        case "Make Upper":
          upper(first);
          break;
  
        case "Make Lower":
          lower(first);
          break;
  
        case "Insert":
          insert(first, second);
          break;
  
        case "Replace":
          replace(first, second);
          break;
  
        case "Validation":
          validation();
          break;
      }
    }
  
    function upper(index) {
      index = Number(index);
  
      if (isIndexValid(index)) {
        let letter = pass[index];
  
        pass = pass.replace(letter, letter.toUpperCase());
        console.log(pass);
      }
    }
  
    function lower(index) {
      index = Number(index);
  
      if (isIndexValid(index)) {
        let letter = pass[index];
  
        pass = pass.replace(letter, letter.toLowerCase());
        console.log(pass);
      }
    }
  
    function insert(index, char) {
      index = Number(index);
  
      if (isIndexValid(index)) {
        pass = pass.substring(0, index) + char + pass.substring(index);
        console.log(pass);
      }
    }
  
    function replace(char, value) {
      value = Number(value);
  
      if (pass.includes(char)) {
        let asci = char.charCodeAt(pass);//42
        let res = asci + value;
        let newChar = String.fromCharCode(res);
  
        pass = pass.split(char).join(newChar);
        console.log(pass);
      }
    }
  
    function isIndexValid(index) {
      return index >= 0 && index < pass.length;
    }
  
    function validation() {
      if (!length) {
        console.log(`Password must be at least 8 characters long!`);
      }
  
      if (!nonChar) {
        console.log(`Password must consist only of letters, digits and _!`);
      }
  
      if (!toUpperCase) {
        console.log(`Password must consist at least one uppercase letter!`);
      }
  
      if (!toLowerCase) {
        console.log(`Password must consist at least one lowercase letter!`);
      }
  
      if (!digit) {
        console.log(`Password must consist at least one digit!`);
      }
    }
  }
passwordValidator(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'])
