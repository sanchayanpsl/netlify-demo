module.exports = {
  generateBuildId: () => 'build-id',

  env: {
    STORE_FRONT_DOMAIN: process.env.STORE_FRONT_DOMAIN,
    STORE_FRONT_ACCESS_TOKEN: process.env.STORE_FRONT_ACCESS_TOKEN,
    NETLIFY_URL: process.env.NETLIFY_URL,
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_TABLE_NAME: process.env.AIRTABLE_TABLE_NAME,
  },

  serverRuntimeConfig: {
    secret: 'abvftstsgstgsrsrsvsr5'
},
publicRuntimeConfig: {
  apiUrl: process.env.NODE_ENV === 'development'
  ? 'https://capable-zabaione-a505bf.netlify.app/api' // development api
  : 'https://capable-zabaione-a505bf.netlify.app/api' // production api
      
}
}