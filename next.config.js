module.exports = {
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'https://capable-zabaione-a505bf.netlify.app/api' // development api
            : 'https://capable-zabaione-a505bf.netlify.app/api' // production api
    }
}
