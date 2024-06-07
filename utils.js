const fs = require('fs').promises;

async function readFile() {
    try {
        const data = await fs.readFile('data.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        throw new Error('Failed to read file');
    }
}

module.exports = {
    readFile
};
