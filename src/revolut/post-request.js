'use strict';

const axios = require('axios');
const config = require('./config');
const viewPage = require('./card-details-view');
const {getOrderAmount, getOrderCurrency} = require("../ecwid/payload-helpers");

const postRevolutOrderRequest = async function (payload) {
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


const postOrder = async function (payload) {
    const publicId = await postRevolutOrderRequest(payload);
    return await viewPage.buildV2(publicId, payload);
};

module.exports = {
    postRevolutOrderRequest,
    postOrder
};
