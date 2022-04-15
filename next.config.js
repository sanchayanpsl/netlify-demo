module.exports = {
    target: 'serverless',
    serverRuntimeConfig: {
        secret: 'sd5egdf5ef35f3fdd'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'https://capable-zabaione-a505bf.netlify.app/api' // development api
            : 'https://capable-zabaione-a505bf.netlify.app/api' // production api
    }
}
