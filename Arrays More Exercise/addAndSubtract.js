function addAndSubtract(firstNum, secondNum, lastNum) {

    function add(first, second) {

        let sumOFTwoNumbers = firstNum + secondNum;
        return sumOFTwoNumbers;
    }
        let sum = add(firstNum, secondNum);

        function subtract (sumOfTwo, lastNum) {
            return sumOfTwo - lastNum;
        }
        let result = subtract (sum, lastNum);
        console.log (result)
}
addAndSubtract(23, 6, 10)