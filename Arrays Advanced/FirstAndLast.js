function firstAndLast (input) {

    let sum = 0;
    let nums = input.shift().split(', ');
    let firstNum = Number(nums.shift());
    let lastNum = Number(input.pop());

 sum = firstNum + lastNum
    console.log(sum)
}
firstAndLast (['20', '30', '40'])