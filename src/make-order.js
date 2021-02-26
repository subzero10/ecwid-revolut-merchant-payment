'use strict';

const decryptor = require('./ecwid/decrypt-payload');
const revolut = require('./revolut/post-request');

const makeOrder = async function (event) {
    const body = getRequestBody(event.body);
    const payload = decryptor.getPayload(body);
    return await revolut.postOrder(payload);
};

/**
 * @param bodyStr base64 encoded
 * @returns {string|null} the encoded payload
 */
function getRequestBody(bodyStr) {
    if (!bodyStr) {
        return null;
    }

    const str = Buffer.from(bodyStr, 'base64').toString();
    return str.replace('data=', '');
}

module.exports = makeOrder;
