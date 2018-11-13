class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    getData() {
        // return this.title.concat(', ', this.length, ', ', this.genre);

        return `${this.title}, ${this.length}, ${this.genre}`;
    }
}

export default Movie;