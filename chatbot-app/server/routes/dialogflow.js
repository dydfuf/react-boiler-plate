const express = require('express')
const router = express.Router()
const structjson = require('./structjson.js')

const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

const config = require('../config/key')
const projectId = config.googleProjectID
const sessionId = config.dialogFlowSessionID
const languageCode = config.dialogFlowSessionLanguageCode

// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
// we will make two route

// Text query route
router.post('/textQuery', async (req, res) => {

    //we need to send some information that comes from the client to Dialogflow API

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)

    // if (result.intent) {
    //     console.log(`  Intent: ${result.intent.displayName}`);
    // } else {
    //     console.log(`  No intent matched.`);
    // }
})

// Event query route
router.post('/eventQuery', async (req, res) => {

    //we need to send some information that comes from the client to Dialogflow API

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
                // The query to send to the dialogflow agent
                name: req.body.event,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)

    // if (result.intent) {
    //     console.log(`  Intent: ${result.intent.displayName}`);
    // } else {
    //     console.log(`  No intent matched.`);
    // }
})



module.exports = router;
