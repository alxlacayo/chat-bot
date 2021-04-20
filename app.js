'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Imports dependencies and set up http serve
const express = require('express');
const bodyParser = require('body-parser');
const Responder = require('./services/responder');
const GraphAPI = require('./services/api');

// creates express http server
const app = express().use(bodyParser.json());


// Sets server port and logs message on success
app.listen(process.env.PORT || 8000, () => console.log('webhook is listening'));

// Just a test URL
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

    // Parse the query params
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
            // Responds with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');

            // Setup the Facebook messenger bot.
            // Very hacky, will improve shortly.
            GraphAPI.setupMessengerProfile() 
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

            res.status(200).send(challenge);
        } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
});

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {

    const body = req.body;

    // Check if this is an event from a page subscription
    if (body.object === 'page') {
        // Iterates over each entry - there may be multiple if batched
        body.entry.forEach(entry => {
            // Gets the message. entry.messaging is an array, but 
            // will only ever contain one message, so we get index 0
            const webhookEvent = entry.messaging[0];
            const senderId = webhookEvent.sender.id;
            const responder = new Responder(senderId, webhookEvent);

            console.log(webhookEvent);
            
            responder.reply();
        });

        // Returns a '200 OK' response to all requests
        res.status(200).send('EVENT_RECEIVED');
    } else {
        // Returns a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    }

});