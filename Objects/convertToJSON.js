function convertToJSON (firstName, lastName, hairColor) {
    let personalInfo = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    let infoJSON = JSON.stringify(personalInfo);
    console.log(infoJSON)
}
convertToJSON ('George', 'Jones', 'Brown' )