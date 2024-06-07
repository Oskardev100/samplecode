function createResponse(statusCode, contentType, body) {
    return {
        statusCode,
        contentType,
        body
    };
}

module.exports = {
    createResponse
};
