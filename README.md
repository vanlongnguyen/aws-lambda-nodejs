## Summary:

```
The example was built with Serverless frameworks using:

AWS lambda

nodejs 10.x

dynamoDB
```
## Setup

```bash
npm install
```

## Deploy

Make sure that you had an AWS console account and granted the sufficient permissons to perform the scripts

```bash
serverless deploy
```

The expected result should be similar to:

```bash
service: aws-lambda-nodejs
stage: dev
region: us-east-1
stack: aws-lambda-nodejs-dev
resources: 27
api keys:
  None
endpoints:
  POST - https://4en8j41upe.execute-api.us-east-1.amazonaws.com/dev/populate
  GET - https://4en8j41upe.execute-api.us-east-1.amazonaws.com/dev/list
  POST - https://4en8j41upe.execute-api.us-east-1.amazonaws.com/dev/query
functions:
  populate: aws-lambda-nodejs-dev-populate
  list: aws-lambda-nodejs-dev-list
  query: aws-lambda-nodejs-dev-query
```

### Populate 

```bash
curl -X POST https://4en8j41upe.execute-api.us-east-1.amazonaws.com/dev/populate
```
This will generate 1000 records of user card

Sample:
```bash
{
    "address": "colts at Kuala Lumpur, Malaysia",
    "id": "daa2f490-58cb-11eb-879e-833e6689aa84",
    "email": "colts@example.com",
    "name": "colts",
    "phone": "0123456789"
},
```

### List all users

```bash
curl https://4en8j41upe.execute-api.us-east-1.amazonaws.com/dev/list
```

Example output:
```bash
[{
    "address": "colts at Kuala Lumpur, Malaysia",
    "id": "daa2f490-58cb-11eb-879e-833e6689aa84",
    "email": "colts@example.com",
    "name": "colts",
    "phone": "0123456789"
},
{
    "address": "jets at Kuala Lumpur, Malaysia",
    "id": "dad723f0-58cb-11eb-879e-833e6689aa84",
    "email": "jets@example.com",
    "name": "jets",
    "phone": "0123456789"
},
{
    "address": "broncos at Kuala Lumpur, Malaysia",
    "id": "db05d511-58cb-11eb-879e-833e6689aa84",
    "email": "broncos@example.com",
    "name": "broncos",
    "phone": "0123456789"
},
...
]%
```

### Query with name and email contain search terms

```bash
curl -X POST https://4en8j41upe.execute-api.us-east-1.amazonaws.com/dev/query --data '{"name": "mac","email": "mac@example"}'
```

Example Result:
```bash
{
    "address": "mac at Kuala Lumpur, Malaysia",
    "id": "daf86790-58cb-11eb-879e-833e6689aa84",
    "email": "mac@example.com",
    "name": "mac",
    "phone": "0123456789"
},%
```

#### For further question: vanlong2507@gmail.com