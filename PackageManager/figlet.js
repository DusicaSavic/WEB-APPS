
//sami kreiramo konstantu
const figlet = require('figlet')


const figText = figlet.textSync('Boo!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
});


//moramo da exportujemo
module.exports = { figText }