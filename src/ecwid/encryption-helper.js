'use strict';

const crypto = require('crypto');

const EncryptionHelper = (function () {
    function decryptText(cipher_alg, key, text, encoding) {
        const bText = Buffer.from(text, encoding);
        const iv = bText.slice(0, 16);
        const payload = bText.slice(16);
        const decipher = crypto.createDecipheriv(cipher_alg, key, iv);
        let result = decipher.update(payload, encoding);
        result += decipher.final();
        return Buffer.from(result);
    }

    return {
        CIPHERS: {
            "AES_128": "aes128",          //requires 16 byte key
            "AES_128_CBC": "aes-128-cbc", //requires 16 byte key
            "AES_192": "aes192",          //requires 24 byte key
            "AES_256": "aes256"           //requires 32 byte key
        },
        decryptText: decryptText
    };
})();
module.exports = EncryptionHelper;
