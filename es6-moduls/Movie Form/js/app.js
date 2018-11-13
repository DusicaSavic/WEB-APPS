import * as ui from './ui.js';
import * as data from './data.js';
import { collectFormInput } from "./ui.js";


const init = () => {
    setupEventListeners();
};

const setupEventListeners = () => {

    const $createMovieBtn = document.querySelector('.movie-button');
    $createMovieBtn.addEventListener('click', onCreateMovieHandler);
}


const onCreateMovieHandler = event => {

    //collect form data
    const movieObj = collectFormInput(); // importovan posebno

    //create movie
    // let { title, length, genre } = movieObj;
    const movieInstance = data.createMovie(movieObj);

    //add movie to list
    data.addMovieToList(movieInstance);

    // display movie
    ui.displayMovie(movieInstance);

    // display total length of all movies
    const totalLength = data.allMoviesLength();
    ui.displayLengthOfAllMovies(totalLength);

    //reset movie form
    ui.resetForm();

}

export {
    init
}

