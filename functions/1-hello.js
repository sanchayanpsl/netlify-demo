//domain/.netlify/functions/1-hello
exports.handler = async (event,context) => {
    return {
        Headers:{
            'Access-Control-Allow-Origin' : '*'
        },
        statusCode: 200,
        body: 'Our First Netlify Function Example',
    }
}