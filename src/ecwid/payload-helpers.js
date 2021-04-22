module.exports = {
    getOrderAmount: (payload) => {
        return payload.cart.order.total * 100;
    },
    getOrderCurrency: (payload) => {
        return payload.cart.currency;
    }
}
