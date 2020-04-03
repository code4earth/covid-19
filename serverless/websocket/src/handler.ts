import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2,
    ),
  }
}

// const apiGatewayManagementApi = new AWS.ApiGatewayManagementApi({
//   apiVersion: '2018-11-29',
//   endpoint: 'http://localhost:3001',
// });

// apiGatewayManagementApi.postToConnection({
//   ConnectionId: ...,
//   Data: ...,
// });

// export const ws =
