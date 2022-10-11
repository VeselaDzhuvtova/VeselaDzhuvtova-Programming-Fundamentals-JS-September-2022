function biggestOf3Numbers(num1, num2, num3) {

    let first = Number.MAX_VALUE;
    let last = Number.MIN_VALUE;
    if (num1 > num2 && num1 > num3) {
        console.log(num1)
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2)
    } else if (num3 > num2 && num3 > num1) {
        console.log(num3)
    } else if (num1=num2=num3) {
        console.log (num1)
    }
}
biggestOf3Numbers(2, 2, 2)