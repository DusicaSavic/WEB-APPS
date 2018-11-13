import Movie from './entities/movie.js'



const storage = {
    movies: []
};


const createMovie = ({ title, length, genre }) => new Movie(title, length, genre)

const addMovieToList = movie => {
    storage.movies.push(movie);
}

const allMoviesLength = () => {

    let lengthOfAllMovies = 0;

    for (let i = 0; i < storage.movies.length; i++) {
        const movie = storage.movies[i];
        const { length } = movie
        const movieLength = Number.parseInt(length);
        lengthOfAllMovies += movieLength;
    }

    return lengthOfAllMovies;
}

export {
    createMovie,
    addMovieToList,
    allMoviesLength
}


