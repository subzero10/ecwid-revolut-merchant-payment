'use strict';

const path = require('path');
const staticFileHandler = require('serverless-aws-static-file-handler');
const clientFilesPath = path.join(__dirname, "./src/public/");
const fileHandler = new staticFileHandler(clientFilesPath);

const makeOrder = require('./src/make-order');
const makeTestOrder = require('./src/revolut/make-test-order');

const respondWithHtml = (statusCode, bodyStr) => {
    return {
        statusCode,
        headers: {
            'Content-Type': 'text/html',
        },
        body: bodyStr
    };
};

module.exports = {
    makeOrder: async (event) => {
        let statusCode = 200;
        let result;
        try {
            result = await makeOrder(event);
        } catch (error) {
            console.error(error);
            statusCode = error.code ? error.code : 500;
            result = {message: error.message};
        }

        return respondWithHtml(statusCode, result);
    },

    makeTestOrder: async (event) => {
        let statusCode = 200;
        let result;
        try {
            result = await makeTestOrder(event);
        } catch (error) {
            console.error(error);
            statusCode = error.code ? error.code : 500;
            result = {message: error.message};
        }

        return respondWithHtml(statusCode, result);
    },

    getMerchantSettingsView: (event) => {
        event.path = "merchant-settings.html";
        return fileHandler.get(event);
    },

    getMerchantSettingsJs: (event) => {
        event.path = "merchant-settings.js";
        return fileHandler.get(event);
    },

    binary: (event) => {
        if (!event.path.startsWith("/binary/")) {
            throw new Error(`[404] Invalid filepath for this resource: ${event.path}`)
        }
        return fileHandler.get(event);
    }
}
