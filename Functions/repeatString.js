function repeatString (str, n) {
 let result = '';
 for (let i = 0; i < n; i ++) {
    result += str;
 }

 return result;
}
let repeatedString = repeatString("abc", 3)
console.log (repeatedString)