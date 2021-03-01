'use strict';

const getRevolutMerchantDetails = function (payload) {
    return {
        apiKey: payload.merchantAppSettings.apiKey,
        endpointAddress: payload.merchantAppSettings.endpointAddress,
    };
}

module.exports = {
    get: getRevolutMerchantDetails
}
