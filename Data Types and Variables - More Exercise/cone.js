function cone (radius, height) {
let volume = ((Math.PI * radius * radius * height)/ 3).toFixed(4);

let areaL = Math.sqrt(radius* radius + height * height);
let areaB = Math.PI * radius * radius;
let areaS = Math.PI * radius * areaL;
let area = (areaB + areaS).toFixed(4);


console.log (`volume = ${volume}`);
console.log(`area = ${area}`);
}

cone (3, 5);