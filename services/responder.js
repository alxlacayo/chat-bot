'use strict'

const GraphAPI = require('./api');
const configResponses = require('./../config/responses');


class Responder {
	
	constructor(senderId, webhookEvent) {
		this.senderId = senderId;
		this.webhookEvent = webhookEvent;
	}

	get payload() {
		// We're only interested in the payload received from postback
		// buttons or quick replies as our messenger bots flow is driven
		// by buttons, not text replies.
		return ('postback' in this.webhookEvent)
			? this.webhookEvent.postback.payload
			: ('message' in this.webhookEvent)
				? ('quick_reply' in this.webhookEvent.message)
					? ('payload' in this.webhookEvent.message.quick_reply)
						? this.webhookEvent.message.quick_reply.payload
						: null 
					: null
				: null;
	}

	async reply() {
		// If the payload received does not exists in our config/responses
		// file then return nothing as we have no defined responses.
		if (!(this.payload in configResponses)) {
			console.log('Respond nothing to this message.')
			return;
		}

		const responses = configResponses[this.payload];
		
		// Iterate over each message for the specificed payload, turn on
		// the messenger typing indicator, add a slight pause, then send to
		// the fb api. before sending to the fb api. 
		try {
			for (let i = 0; i < responses.length; i++) {
				let typingOn = await GraphAPI.turnOnTypingIndicator(this.senderId);
				console.log('typingOn');
				let typingDelay = await GraphAPI.simulateTypingDelay();
				console.log('typingDelay');
				let sendMessage = await GraphAPI.sendMessage(this.senderId, responses[i]);
				console.log('sendMessage');
			}
		} catch (error) {
			console.log(error);

			// If an error occurs send recipient an error message.
			try {
				await GraphAPI.sendErrorMessage(this.senderId);
			} catch (error) {
				// Log error some where
			}
		}
	};
}


module.exports = Responder;