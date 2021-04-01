

const profile = {
    'greeting': [
        {
            'locale': 'default',
            'text': 'Hi {{user_first_name}}, tap the button below to get started.'
        }
    ],
    'get_started': {
        'payload': 'GET_STARTED'
    },
    'persistent_menu': [
        {
            'locale': 'default',
            'composer_input_disabled': false,
            'call_to_actions': [
                {
                    'type': 'web_url',
                    'title': 'Request Prayer',
                    'url': 'https://second.org',
                    'webview_height_ratio': 'full'
                },
                {
                    'type': 'postback',
                    'title': 'Ask Questions',
                    'payload': 'ASK_QUESTIONS'
                },
                {
                    'type': 'web_url',
                    'title': 'Join Newsletter',
                    'url': 'https://second.org',
                    'webview_height_ratio': 'full'
                },
                {
                    'type': 'postback',
                    'title': 'Worship Services',
                    'payload': 'WORSHIP_SERVICES'
                },
                {
                    'type': 'postback',
                    'title': 'Daily Devotional',
                    'payload': 'DAILY_DEVOTIONAL'
                },
                {
                    'type': 'postback',
                    'title': 'Our Locations',
                    'payload': 'OUR_LOCATIONS'
                },
            ]
        }
    ]  
};


module.exports = profile;