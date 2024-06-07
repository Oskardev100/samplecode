function processData(data) {
    return data.map(item => ({
        id: item.id,
        name: item.name.toUpperCase()
    }));
}

module.exports = {
    processData
};
