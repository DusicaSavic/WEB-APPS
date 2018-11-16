(function () {
    'use strict'

    function dateString(dateObject) {
        var dd = dateObject.getDate();
        var mm = dateObject.getMonth() + 1;
        var yyyy = dateObject.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        return dd + '.' + mm + '.' + yyyy;

    };

    //// Create Functions ////
    function createMovie(movieTitle, movieLength, genreName) {
        var genreObj = new Genre(genreName);
        var movie = new Movie(movieTitle, genreObj, movieLength);

        return movie;
    }

    function createProgram(dateStr) {
        var date = new Date(dateStr);
        var program = new Program(date);
        return program;
    }



    //// Create festival ////

    var fest = new Festival('Fest');

    var competition = createProgram('2-12-2019');
    var oldies = createProgram('2-15-2019');

    var batman = createMovie('Batman', 130, 'Action');
    var firstReformed = createMovie('First Reformed', 108, 'Drama');
    var suspiria = createMovie('Suspiria', 97, 'Horror');
    var theTenant = createMovie('The Tenant', 126, 'Horror');

    competition.addMovie(batman);
    competition.addMovie(firstReformed);
    oldies.addMovie(suspiria);
    oldies.addMovie(theTenant);

    fest.addProgram(competition);
    fest.addProgram(oldies);

    console.log(fest.getData());

})();
