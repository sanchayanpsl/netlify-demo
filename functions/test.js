const axios = require("axios")

//domain/.netlify/functions/1-hello
exports.handler = async (event,context) => {
    const res = await axios.post('http://localhost:8888/.netlify/functions/users', { username: 'test',password:"test" });
    console.log(res.data,"here")
    return {
        Headers:{
            'Access-Control-Allow-Origin' : '*'
        },
        statusCode: 200,
        body:JSON.stringify(res.data) ,
        code:200
    }
}