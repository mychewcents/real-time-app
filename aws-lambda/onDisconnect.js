const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
});

exports.handler = async (event, context) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      connectionId: event.requestContext.connectionId,
    },
  };

  try {
    await docClient.delete(params).promise();
    return { statusCode: 200 };
  } catch (e) {
    return { statusCode: 500 };
  }
};
