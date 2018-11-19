// ovaj deo samo ubacujemo

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    const myPosts = [{
        name: "loremIpsum",
        body: "loremIpsum body"


    }]
    // umest opplication/json moze da stoji text/plain
    // ovaj deo sami ubacujemo


    res.end(JSON.stringify(myPosts));
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});
