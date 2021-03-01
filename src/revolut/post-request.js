'use strict';

const axios = require('axios');
const config = require('./config');
const viewPage = require('./card-details-view');

const postOrderRequest = async function (payload) {
    const settings = config.get(payload);
    const request = {
        amount: getOrderAmount(payload),
        currency: getOrderCurrency(payload)
    };
    const headers = {
        "Authorization": `Bearer ${settings.apiKey}`
    };
    //todo: could do some error control here
    const result = await axios.post(settings.endpointAddress, request, {headers});
    return result.data.public_id;
};

const getOrderAmount = function (payload) {
    return payload.cart.order.total * 100;
};

const getOrderCurrency = function (payload) {
    return payload.cart.currency;
};

const postOrder = async function (payload) {
    const publicId = await postOrderRequest(payload);
    return viewPage.build(publicId, payload);
};

module.exports = {
    postOrder
};
