'use strict';

const encryptionHelper = require('./encryption-helper');
const testPayload = require('./test-payload');

module.exports = {
    getPayload: function (data) {
        if (!data) {
            data = testPayload.getEncoded();
        }

        if (data === 'USE_TEST_PAYLOAD') {
            return testPayload.get();
        }

        const ecwidClientSecret = process.env.ECWID_CLIENT_SECRET;
        const encryptionKey = ecwidClientSecret.substr(0, 16);
        const originalBase64 = data.replace(/-/g, "+").replace(/_/g, "/");
        const algorithm = encryptionHelper.CIPHERS.AES_128_CBC;
        const decrypted = encryptionHelper.decryptText(algorithm, encryptionKey, originalBase64, "base64");
        return JSON.parse(decrypted);
    }
}
