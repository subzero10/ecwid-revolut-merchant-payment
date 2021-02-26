'use strict';

const config = require('./config');

const getCardDetailsViewParams = function (payload) {
    return {
        orderEmail: payload.cart.order.email,
        orderToken: payload.token,
        storeId: payload.storeId,
        referenceTransactionId: payload.cart.order.referenceTransactionId,
        returnUrl: payload.returnUrl
    };
}

const isProdRequest = function (payload) {
    const settings = config.get(payload);
    return settings.endpointAddress.indexOf('sandbox') > -1;
}

module.exports = {
    build: function (orderPublicId, ecwidOrderPayload) {
        const viewParams = getCardDetailsViewParams(ecwidOrderPayload);
        const env = isProdRequest(ecwidOrderPayload) ? 'sandbox' : 'prod';
        return `
    <head>
        <title>Shop</title>
        <script>!function(e,o,t){e[t]=function(n,r){var c={sandbox:"https://sandbox-merchant.revolut.com/embed.js",prod:"https://merchant.revolut.com/embed.js",dev:"https://merchant.revolut.codes/embed.js"},d=o.createElement("script");d.id="revolut-checkout",d.src=c[r]||c.prod,d.async=!0,o.head.appendChild(d);var s={then:function(r,c){d.onload=function(){r(e[t](n))},d.onerror=function(){o.head.removeChild(d),c&&c(new Error(t+" is failed toload"))}}};return"function"==typeof Promise?Promise.resolve(s):s}}(window,document,"RevolutCheckout");</script>
    </head>
    <body>
        <script>
            function notifyEcwid(paymentStatus, errorMessage) {
                const xhttp = new XMLHttpRequest();
                xhttp.onload = function () {
                    let returnUrl = "${viewParams.returnUrl}";
                    if (errorMessage || xhttp.status !== 200) {
                        const errorMsg = errorMessage || xhttp.statusText;
                        returnUrl = returnUrl + '&errorMsg=' + encodeURI(errorMsg);  
                    }
                    window.location = returnUrl;
                };
                const url = "https://app.ecwid.com/api/v3/${viewParams.storeId}/orders/${viewParams.referenceTransactionId}?token=${viewParams.orderToken}";
                xhttp.open("PUT", url, true);
                xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xhttp.send(JSON.stringify({ "paymentStatus": paymentStatus }));
            }
            
            RevolutCheckout("${orderPublicId}", "${env}").then(function (RC) {
                RC.payWithPopup({
                    name: "",
                    email: "${viewParams.orderEmail}",
                    onSuccess() {
                        notifyEcwid("PAID");
                    },
                    onError(error) {
                        notifyEcwid("INCOMPLETE", error.message);
                    },
                    onCancel() {
                        notifyEcwid("CANCELLED");
                    }
              });
          });
        </script>
    </body>
    `;
    }
};
