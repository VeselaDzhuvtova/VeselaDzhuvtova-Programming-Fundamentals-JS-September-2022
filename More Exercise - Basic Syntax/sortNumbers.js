function sortNumbers(num1, num2, num3) {

    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let middle = 0;

    if (num1 > max){
        max = num1;
    }
    if (num1 < min){
        min = num1;
    }

    if (num2 > max)
    {
        max = num2;
    }
    if (num2 < min){
        min = num2;
    }
        
    if (num3 > max){
        max = num3;
    }
    if (num3 < min){
        min = num3;
    }
    if (max == num1 && min == num2){
        middle = num3;
    }
    else if (max == num1 && min == num3){
        middle = num2;
    }
    else if (max == num2 && min == num1){
        middle = num3;
    }
    else if (max == num2 && min == num3){
        middle = num1;
    }
    else if (max == num3 && min == num1){
        middle = num2;
    }
    else if (max == num3 && min == num2)
    {
        middle = num1;
    }
    console.log(max)
    console.log(middle)
    console.log(min)
}
sortNumbers('3','4','2')