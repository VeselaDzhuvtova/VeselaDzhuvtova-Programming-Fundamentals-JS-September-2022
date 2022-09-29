function gramophone (band, album, songName) {
    let time = (album.length * band.length) * songName.length / 2
    let rotations = Math.ceil(time / 2.5);
    console.log (`The plate was rotated ${rotations} times.`)
}
gramophone ('Black Sabbath', 'Paranoid', 'War Pigs')