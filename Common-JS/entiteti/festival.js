//// Festival ////
class Festival {
    constructor(name) {

        this.name = name;
        this.listOfPrograms = [];
        this.numOfAllMovies = 0;

    };


    addProgram(program) {
        this.listOfPrograms.push(program);
        this.numOfAllMovies += program.numOfMovies;
    };

    getData() {
        let outputStr = `${this.name} has ${this.numOfAllMovies}  movie titles\n`;

        for (let i = 0; i < this.listOfPrograms.length; i++) {
            const currentProgram = this.listOfPrograms[i];
            outputStr += `\t\t${currentProgram.getData()}\n`;
        }

        return outputStr;
    };
}

module.exports = {
    Festival
}
