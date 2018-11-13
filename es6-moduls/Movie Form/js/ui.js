

const $titleInput = document.querySelector('.title-content');
const $lengthInput = document.querySelector('.length-content');
const $genreInput = document.querySelector('.genre-select');
const $movieList = document.querySelector('.movie-list');
const $movieForm = document.querySelector('.movie-form');


const collectFormInput = () => ({
    title: $titleInput.value,
    length: $lengthInput.value,
    genre: $genreInput.value

});

const displayMovie = movie => {

    const $li = document.createElement('li');
    const movieData = movie.getData()
    $li.textContent = movieData;
    $movieList.appendChild($li);

};

const displayLengthOfAllMovies = totalLength => {

    const $totalLength = document.querySelector('.total-length');
    $totalLength.innerHTML = `All movies length: ${totalLength} min`;

}

const resetForm = () => {

    $movieForm.reset();

}


export {
    collectFormInput,
    displayMovie,
    displayLengthOfAllMovies,
    resetForm
}

