function vacation(groupOfPeople, typeOfGroup, dayOfTheWeek) {

    let price = 0;

    switch (typeOfGroup) {
        case "Students":
            if (dayOfTheWeek === "Friday") {
                price = groupOfPeople * 8.45;
            } else if (dayOfTheWeek === "Saturday") {
                price = groupOfPeople * 9.80;
            } else if (dayOfTheWeek === "Sunday") {
                price = groupOfPeople * 10.46;
            }
            break;
        case "Business":
            if (typeOfGroup === "Business" && groupOfPeople >= 100) {
                groupOfPeople -= 10;
            }
            if (dayOfTheWeek === "Friday") {
                price = groupOfPeople * 10.90;
            } else if (dayOfTheWeek === "Saturday") {
                price = groupOfPeople * 15.60;
            } else if (dayOfTheWeek === "Sunday") {
                price = groupOfPeople * 16;
            }
            break;
        case "Regular":
            if (dayOfTheWeek === "Friday") {
                price = groupOfPeople * 15;
            } else if (dayOfTheWeek === "Saturday") {
                price = groupOfPeople * 20;
            } else if (dayOfTheWeek === "Sunday") {
                price = groupOfPeople * 22.50;
            }
            break;
    }
    if (typeOfGroup === "Students" && groupOfPeople >= 30) {
        price = price * 0.85;
    }
    if (typeOfGroup === "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20) {
        price = price * 0.95;
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}
vacation(100, "Business", "Sunday")