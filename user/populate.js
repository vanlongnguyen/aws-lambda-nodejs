'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
/**
 * 
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
function populateUser(event, context, callback) {
  var names = ['patriots', 'colts', 'jets', 'texans', 'ravens', 'broncos', 'mac', 'johns'];

  for (var i = 0; i < 1000; i++) {

    var name = names[Math.floor(Math.random() * names.length)];
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: uuid.v1(),
        address: name + ' at Kuala Lumpur, Malaysia',
        name: name,
        email: name + '@example.com',
        phone: '0123456789'
      },
    };

    dynamoDb.put(params, (error) => {
      if (error) {
        console.error(error);
        callback(null, {
          statusCode: error.statusCode,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Couldn\'t populate the users.',
        });
        return;
      }
    });

  }
}
/**
 * 
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.populate = async (event, context, callback) => {
  await populateUser(callback);
  const response = {
    statusCode: 200,
    body: 'Completed populating users',
  };
  callback(null, response);
};
