'use strict'

const axios = require('axios');
const configProfile = require('./../config/profile');


class GraphAPI {

	static sendMessage(recipientId, requestBody) {
		// Add the recipient to the request body before sending.
		requestBody.recipient = { id: recipientId };

		return axios({
			'method': 'post',
			'url': 'https://graph.facebook.com/v8.0/me/messages',
			'params': { 'access_token': process.env.PAGE_ACCESS_TOKEN },
			'data': requestBody
		});
	}

	static turnOnTypingIndicator(recipientId) {
		const requestBody = {
			'sender_action': 'typing_on'
		};
	
		return this.sendMessage(recipientId, requestBody)
	}
	
	static simulateTypingDelay() {
		return new Promise(resolve => setTimeout(() => resolve(), 1200));
	}

	static sendErrorMessage(recipientId) {
		const requestBody = {
            'message': {
				'text': 'Uh-oh. Looks like something went wrong. Try again.'
			}
        };
		
		return this.sendMessage(recipientId, requestBody)
	}

	static setupMessengerProfile() {
		const requestBody = configProfile;

		return axios({
			'method': 'post',
			'url': 'https://graph.facebook.com/v8.0/me/messenger_profile',
			'params': { 'access_token': process.env.PAGE_ACCESS_TOKEN },
			'data': requestBody
		});
	}

}


module.exports = GraphAPI;