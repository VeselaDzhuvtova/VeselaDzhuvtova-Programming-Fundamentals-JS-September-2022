function smallestTwoNumbers (input) {
    let nums = input.sort((a, b) => a - b);
    let result = nums.slice(0,2);
    console.log(result.join(' '));
}
smallestTwoNumbers ([30, 15, 50, 5])