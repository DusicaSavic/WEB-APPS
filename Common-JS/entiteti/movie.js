//// Movie ////
function Movie(title, genreObj, length) {

    this.title = title;
    this.genre = genreObj;
    this.length = length;

};

Movie.prototype.getData = function () {
    return this.title.concat(', ', this.length, 'min, ', this.genre.getData());
};