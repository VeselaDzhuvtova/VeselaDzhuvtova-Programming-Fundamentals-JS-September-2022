function softUniReception (input) {
    let first = Number(input.shift());
    let second = Number(input.shift());
    let third = Number(input.shift());
    let students = Number(input.shift());

    let totalStudentsForHour = first + second + third;
    let time = 0;
   
    while (students > 0) {
        students -= totalStudentsForHour;
        time++;

        if (time % 4 === 0) {
            time++;
        }
    }

    console.log(`Time needed: ${time}h.`)
}
softUniReception 
// (['1','2','3','45'])
// (['5','6','4','20'])
(['3','2','5','40'])