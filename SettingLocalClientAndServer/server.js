// ovaj deo samo ubacujemo

const http = require('http');
const { figText } = require('./figlet')


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // umest opplication/json moze da stoji text/plain
    // ovaj deo sami ubacujemo
    res.end(figText);
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});