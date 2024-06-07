const http = require('http');
const utils = require('./utils');
const service = require('./service');
const config = require('./config');
const logger = require('./logger');
const responseFactory = require('./responseFactory');

const hostname = config.hostname;
const port = config.port;

const server = http.createServer(async (req, res) => {
    try {
        if (req.url === '/data' && req.method === 'GET') {
            const data = await utils.readFile();
            const result = service.processData(data);
            const response = responseFactory.createResponse(200, 'application/json', JSON.stringify(result));
            res.writeHead(response.statusCode, { 'Content-Type': response.contentType });
            res.end(response.body);
        } else {
            const response = responseFactory.createResponse(404, 'text/plain', 'Not Found');
            res.writeHead(response.statusCode, { 'Content-Type': response.contentType });
            res.end(response.body);
        }
    } catch (err) {
        logger.error('Error:', err);
        const response = responseFactory.createResponse(500, 'text/plain', 'Internal Server Error');
        res.writeHead(response.statusCode, { 'Content-Type': response.contentType });
        res.end(response.body);
    }
});

server.listen(port, hostname, () => {
    logger.info(`Server running at http://${hostname}:${port}/`);
});
