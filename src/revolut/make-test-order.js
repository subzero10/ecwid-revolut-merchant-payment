const viewPage = require('./card-details-view');
const {postRevolutOrderRequest} = require("./post-request");

const makeTestOrder = async function (event) {
    const payload = {
        merchantAppSettings: {
            apiKey: 'ug1lOqLxKp2RK2aI2070tXIjB50KX8Yr_8MOSXgR4QoGZMyVgp-SfYWBGQ2TqpTl',
            endpointAddress: 'https://sandbox-merchant.revolut.com/api/1.0/orders'
        },
        cart: {
            currency: '£',
            order: {
                email: 'pagcosma@gmail.com',
                total: 99
            }
        }
    }
    const publicId = await postRevolutOrderRequest(payload);
    return await viewPage.buildV2(publicId, payload);
};

module.exports = makeTestOrder;
