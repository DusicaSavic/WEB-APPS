
//// Genre ////
function Genre(name) {

    this.name = name;
};

Genre.prototype.getData = function () {
    return this.name[0].concat(this.name[this.name.length - 1]).toUpperCase();  //action -> AC
}