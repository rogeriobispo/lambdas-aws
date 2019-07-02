'use strict';
const s3Service = require('./service/s3service');
const dynamodbService = require('./service/dynamodbService');

module.exports.upload = async (event) => {
  const result = await s3Service.upload(event.body);
  await dynamodbService.put(result)
  return {
    statusCode: 201,
    body: JSON.stringify(result),
  };
};
