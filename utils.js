const fs = require('fs');

function readFile(callback) {
    fs.readFile('data.json', 'utf8', function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, JSON.parse(data));
        }
    });
}

module.exports = {
    readFile
};
