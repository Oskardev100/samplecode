const http = require('http');
const utils = require('./utils');
const service = require('./service');
const { timeStamp, time } = require('console');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer(function (req, res) {
    if (req.url == '/data' && req.method == 'GET') {
        utils.readFile(function (err, data) {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Error reading data');
                console.log('Error:', err);
            } else {
                service.processData(data, function (result) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(result));
                });
            }
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    } 
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
