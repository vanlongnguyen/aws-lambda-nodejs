'use strict';

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
/**
 * 
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
module.exports.query = (event, context, callback) => {
  const data = JSON.parse(event.body);
  
  var params=  {
    TableName: process.env.DYNAMODB_TABLE,
    FilterExpression:'contains (#myname, :name) and contains (#myemail, :email)',
    ExpressionAttributeValues:{ 
      ":name"  : data.name,
      ":email" : data.email
    },
    ExpressionAttributeNames: { 
      "#myname" : "name",
      "#myemail": "email"
    }
  };

  dynamoDb.scan(params, function(error, data){
      if(error){
          console.error(error);
          callback(null, {
            statusCode: error.statusCode || 501,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Couldn\'t query the users.',
          });
          callback(error, null);
      } else {
        const response = {
          statusCode: 200,
          body: JSON.stringify(data.Items)
        };
        callback(null, response);
    }
  });
};
