// //domain/.netlify/functions/1-hello
// exports.handler = async (event,context) => {
//     console.log(event)
//     return {
//         Headers:{
//             'Access-Control-Allow-Origin' : '*'
//         },
//         statusCode: 200,
//         body: 'Our First Netlify Function MANTU',
//     }
// }

const querystring = require("querystring");
const data = require('../../data/users.json')
exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = JSON.parse(event.body)
console.log(data[0].username)
  if(params.username == data[0].username && params.password == data[0].password){

    return {
        statusCode: 200,
        body: JSON.stringify({code:200, message: "Login Success" }),
      };
  }else{
    return {
        statusCode: 403,
        body: JSON.stringify({code:400, message: "Somthing Went Wrong" }),

      };
  }

 
  
};