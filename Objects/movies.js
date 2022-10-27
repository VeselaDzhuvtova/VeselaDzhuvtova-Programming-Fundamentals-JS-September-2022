function movies(array) {

    let movies = [];

    for (let line of array) {

        if (line.includes('addMovie')) {
            let nameOfMovie = line.split('addMovie ')[1];
            movies.push({ name: nameOfMovie });
        } else if (line.includes('directedBy')) {
            let [nameOfMovie, director] = line.split(' directedBy ');
            let movie = movies.find((movieObj => movieObj.name === nameOfMovie));

            if (movie) {
                movie.director = director;
            }
        } else if (line.includes('onDate')) {
            let [nameOfMovie, date] = line.split(' onDate ');
            let movie = movies.find((movieObj => movieObj.name === nameOfMovie));

            if (movie) {
                movie.date = date;
            }
        }
    }
    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
    )
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);