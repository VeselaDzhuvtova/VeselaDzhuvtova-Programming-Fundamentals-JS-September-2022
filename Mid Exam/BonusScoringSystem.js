function BonusScoringSystem (input) {
    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let bonusPlus = Number(input.shift());

    let inputLength = input.length;
    let totalBonus = 0;
    let points = 0;
    let attendance = 0;

    for (let i = 0; i < inputLength; i++) {
        let currAttendances = Number(input[i]);
        points = currAttendances / lectures * (5 + bonusPlus);

        if (points > totalBonus) {
            totalBonus = points;
        }
        if (currAttendances > attendance) {
            attendance = currAttendances;
        }
    }

    console.log (`Max Bonus: ${Math.ceil(totalBonus)}.`);
    console.log (`The student has attended ${attendance} lectures.`)
}
BonusScoringSystem
([ 
    '5',  '25', '30', 
    '12', '19', '24', 
    '16', '20' 
  ])