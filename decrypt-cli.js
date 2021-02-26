/**
 * Use this to test decrypting payload from Ecwid.
 * You will need to have already set the ECWID_CLIENT_SECRET environment variable.
 */

if (!process.env.ECWID_CLIENT_SECRET) {
    console.error('Missing Ecwid Client Secret');
    process.exit(1);
    return;
}

const data = process.argv[2];
if (!data) {
    console.error('Missing data argument');
    process.exit(1);
    return;
}

const decryptor = require('./src/ecwid/decrypt-payload');
const decrypted = decryptor.getPayload(data);
console.info(decrypted);
