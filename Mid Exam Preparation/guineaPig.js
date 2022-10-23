function guineaPig(input) {
    let foodKg = Number(input.shift());
    let hay = Number(input.shift());
    let cover = Number(input.shift());
    let kgToPuppy = Number(input.shift());

    let foodForADay = 300;
    let leftFood = (foodKg * 1000);
    let leftHay = hay * 1000;
    let grToPuppy = kgToPuppy * 1000;
    let leftCover = cover * 1000;

    for (let day = 1; day <= 30; day++) {
        leftFood -= foodForADay;
        if (day % 2 === 0) {
            leftHay -= (leftFood * 5 / 100);
        } if (day % 3 === 0) {
            leftCover -= (grToPuppy / 3);
        }
    }
    if (leftFood >= 0 && leftHay >= 0 && leftCover >= 0) {
        console.log (`Everything is fine! Puppy is happy! Food: ${(leftFood / 1000).toFixed(2)}, Hay: ${(leftHay / 1000).toFixed(2)}, Cover: ${(leftCover / 1000).toFixed(2)}.`)
    } else {
        console.log ('Merry must go to the pet store!')
    }
}
guineaPig(["10",

    "5",

    "5.2",

    "1"])