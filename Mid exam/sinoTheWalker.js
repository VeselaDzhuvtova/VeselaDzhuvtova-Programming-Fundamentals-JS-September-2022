function sinoTheWalker(input) {

    let leave = input.shift().split(':');
    let steps = Number(input.shift());
    let timeForOneStep = Number(input.shift());
    let time = steps * timeForOneStep;

    let sec = Number(leave.pop());
    let min = Number(leave.pop()) * 60;
    let hours = Number(leave.pop()) * 3600;
    let totalInputInSec = hours + min + sec;

    let totalTimeInSec = (steps * timeForOneStep) + totalInputInSec;

    let arriveHour = Math.floor((totalTimeInSec / 3600) % 24);
    let arriveMin = Math.floor((totalTimeInSec / 60) % 60);
    let arriveSec = Math.floor(totalTimeInSec % 60);

    if (arriveSec < 10){
        arriveSec = "0" + arriveSec;
    }
    if (arriveMin < 10){
        arriveMin = "0" + arriveMin;
    }
    if (arriveHour < 10){
        arriveHour = "0" + arriveHour;
    }
    console.log(`Time Arrival: ${arriveHour}:${arriveMin}:${arriveSec}`);
}

sinoTheWalker(['23:49:13',
    5424,
    2
])