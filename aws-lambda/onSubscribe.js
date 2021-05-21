const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
});

exports.handler = async (event, context) => {
  const connectionId = event.requestContext.connectionId;
  const topic = JSON.parse(event.body).topic;

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: { connectionId, topic },
    ReturnValues: 'NONE',
  };

  await docClient.put(params).promise();
  return {
    statusCode: 200,
    body: 'Subscribed for: ' + topic,
  };
};
