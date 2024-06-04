function processData(data, callback) {
    // Simulate data processing
    const result = data.map(item => {
        return {
            id: item.id,
            name: item.name.toUpperCase()
        };
    });
    callback(result);
}

module.exports = {
    processData
};
