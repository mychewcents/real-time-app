exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Successfully connected'),
  };
  return response;
};
