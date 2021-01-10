'use strict';

const config = {

    // Change to your endpoint did's endpoint
    endpointDidEndpoint: process.env.PUBLIC_DID_ENDPOINT,

    // IP Address of the running ledger
    testPoolIp: process.env.TEST_POOL_IP || '127.0.0.1',

    // the port to run the agent server on
    port: process.env.PORT || 3000,

    // Optional: Give your wallet a unique name
    walletName: `${process.env.USERNAME || 'alice'}_wallet`,

    // Optional: Give your pool config a unique name
    poolName: process.env.POOL_NAME || 'pool1',

    // This information is used to issue your "Government ID"
    userInformation: {
        name: process.env.NAME || 'Stitch',
        email: process.env.EMAIL || '123456789@qq.com',
        eid: process.env.TAX_ID || '123456789',
        icon_src: process.env.ICON_SRC || 'https://cdn1.iconfinder.com/data/icons/business-finance-vol-3-39/512/id_card_badge_identity-256.png',
        username: process.env.USERNAME || 'Stitch',
        password: process.env.PASSWORD || '123'
    },

    sessionSecret: "YUYFDISYFSIUOFYERTEWRTEWTWETRNNNMNJHKHFASDdyfiudayDAYIUSDFYASIOFOOASIUDFYEREAHLSKJFE57894502354354HJKAFDDFS"
};

module.exports = config;
