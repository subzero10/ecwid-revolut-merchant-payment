'use strict';

const getRevolutMerchantDetails = function (payload) {

    const apiKey = payload.merchantAppSettings.apiKey;
    const endpointAddress = payload.merchantAppSettings.endpointAddress;

    return {
        apiKey: apiKey || process.env.REVOLUT_MERCHANT_API_KEY,
        endpointAddress: endpointAddress || process.env.REVOLUT_MERCHANT_ENDPOINT_ADDRESS
    };
}

module.exports = {
    get: getRevolutMerchantDetails
}
