
//// Program ////
function Program(date) {

    this.date = date;
    this.listOfMovies = [];
    this.numOfMovies = 0;
    this.programLength = 0;
};

Program.prototype.addMovie = function (movie) {
    var movies = this.listOfMovies;
    movies.push(movie);
    this.numOfMovies++;
};

// var competition = new Program(new Date('2-12-2019'));

Program.prototype.getData = function () {
    var outputStr = dateString(this.date) + ', program duration: ' + this.programLength + 'min\n';

    for (var i = 0; i < this.listOfMovies.length; i++) {
        var currentMovie = this.listOfMovies[i];
        outputStr += '\t\t\t' + currentMovie.getData() + '\n';
    }

    return outputStr;

};

    // console.log(competition.getData());