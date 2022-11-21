function sortAnArrayBy2Criteria (input) {

    let sortedArray = input.sort((a,b)=> {
        return a.length - b.length || a.localeCompare(b)
    });
    sortedArray.forEach(element => {
        console.log(element)
    });
}
sortAnArrayBy2Criteria (['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])