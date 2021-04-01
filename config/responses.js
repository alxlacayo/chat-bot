

const responses = {
    'GET_STARTED': [
        
        {
            'message': {
				'text': 'Hey, welcome to the Second Online assistant. 👋'
			}
        },
        {
            'message': {
				'text': 'Choose an option from the menu below to get started.'
			}
        },
        {
            'message': {
                'attachment': {
                    'type': 'template',
                    'payload': {
                        'template_type': 'generic',
                        'elements':[
                            {
                                'title': 'Connect',
                                'image_url': 'https://42q3zp1rkoozvid60fyei412-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/west-1.jpg',
                                'subtitle': 'A subtitle goes here',
                                'buttons': [
                                    {
                                        'type': 'web_url',
                                        'url': 'https://second.org',
                                        'title': 'Request Prayer'
                                    },
                                    {
                                        'type': 'postback',
                                        'title': 'Ask Questions',
                                        'payload': 'ASK_QUESTIONS'
                                    },
                                    {
                                        'type': 'web_url',
                                        'url': 'https://second.org',
                                        'title': 'Join Newsletter'
                                    }
                                ]								
                            },
                            {
                                'title': 'Church',
                                'image_url': 'https://42q3zp1rkoozvid60fyei412-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/woodway.jpg',
                                'subtitle': 'A subtitle goes here',
                                'buttons': [
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
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        },
    ],
    'OUR_LOCATIONS': [
        {
            'message': {
                'attachment': {
                    'type': 'template',
                    'payload': {
                        'template_type': 'generic',
                        'elements':[
                            {
                                'title': 'Woodway',
                                'image_url': 'https://42q3zp1rkoozvid60fyei412-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/woodway.jpg',
                                'subtitle': '6400 Woodway Houston, Texas 77057',
                                'default_action': {
                                    'type': 'web_url',
                                    'url': 'https://www.second.org/locations/woodway',
                                    'webview_height_ratio': 'full'
                                },
                                'buttons': [
                                    {
                                        'type': 'web_url',
                                        'url': 'https://www.second.org/locations/woodway',
                                        'title': 'More information'
                                    },
                                    {
                                        'type': 'web_url',
                                        'url': 'https://www.facebook.com/SBCHouston.Woodway',
                                        'title': 'Facebook page'
                                    }
                                ]
                            },
                            {
                                'title': 'West',
                                'image_url': 'https://42q3zp1rkoozvid60fyei412-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/west-1.jpg',
                                'subtitle': '19449 Katy Fwy Katy, Texas 77094',
                                'default_action': {
                                    'type': 'web_url',
                                    'url': 'https://www.second.org/locations/west',
                                    'webview_height_ratio': 'full'
                                },
                                'buttons': [
                                    {
                                        'type': 'web_url',
                                        'url': 'https://www.second.org/locations/west',
                                        'title': 'More information'
                                    },
                                    {
                                        'type': 'web_url',
                                        'url': 'https://www.facebook.com/sbcwestcampus',
                                        'title': 'Facebook page'
                                    }
                                ]								
                            },
                            {
                                'title': 'North',
                                'image_url': 'https://42q3zp1rkoozvid60fyei412-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/north.jpg',
                                'subtitle': '22770 Hwy 59 N Kingwood, Texas 77339',
                                'default_action': {
                                    'type': 'web_url',
                                    'url': 'https://www.second.org/locations/north',
                                    'webview_height_ratio': 'full'
                                },
                                'buttons': [
                                    {
                                        'type': 'web_url',
                                        'url': 'https://www.second.org/locations/north',
                                        'title': 'More information'
                                    },
                                    {
                                        'type': 'web_url',
                                        'url': 'https://www.facebook.com/SBCHouston.North',
                                        'title': 'Facebook page'
                                    }
                                ]									
                            },
                            {
                                'title': 'South',
                                'image_url': 'https://42q3zp1rkoozvid60fyei412-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/south.jpg',
                                'subtitle': '12008 Shadow Creek Pearland, Texas 77584',
                                'default_action': {
                                    'type': 'web_url',
                                    'url': 'https://www.second.org/locations/south',
                                    'webview_height_ratio': 'full'
                                },
                                'buttons': [
                                    {
                                        'type': 'web_url',
                                        'url': 'https://www.second.org/locations/south',
                                        'title': 'More information'
                                    },
                                    {
                                        'type': 'web_url',
                                        'url': 'https://www.facebook.com/sbcsouth',
                                        'title': 'Facebook page'
                                    }
                                ]								
                            },
                            {
                                'title': 'Cypress',
                                'image_url': 'https://42q3zp1rkoozvid60fyei412-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/cypress.jpg',
                                'subtitle': '29900 Hwy 290 Cypress, Texas 77433',
                                'default_action': {
                                    'type': 'web_url',
                                    'url': 'https://www.second.org/locations/cypress',
                                    'webview_height_ratio': 'full'
                                },
                                'buttons': [
                                    {
                                        'type': 'web_url',
                                        'url': 'https://www.second.org/locations/cypress',
                                        'title': 'More information'
                                    },
                                    {
                                        'type': 'web_url',
                                        'url': 'https://www.facebook.com/SecondCypress',
                                        'title': 'Facebook page'
                                    }
                                ]									
                            },
                            {
                                'title': '1463',
                                'image_url': 'https://42q3zp1rkoozvid60fyei412-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/1463.jpg',
                                'subtitle': '5757 FM 1463 Katy, Texas 77494',
                                'default_action': {
                                    'type': 'web_url',
                                    'url': 'https://www.second.org/locations/1463',
                                    'webview_height_ratio': 'full'
                                },
                                'buttons': [
                                    {
                                        'type': 'web_url',
                                        'url': 'https://www.second.org/locations/1463',
                                        'title': 'More information'
                                    },
                                    {
                                        'type': 'web_url',
                                        'url': 'https://www.facebook.com/Second-Baptist-Church-1463-Campus-1714587812101224',
                                        'title': 'Facebook page'
                                    }
                                ]								
                            }
                        ]
                    }
                }
            }
        }
    ],
    'ASK_QUESTIONS': [
        {
            'message': {
                'text': 'How can we help you? Send us your questions or comments below and we\'ll get back to you as soon as possible'
            }
        }
    ],
    'WORSHIP_SERVICES': [
        {
            'message': {
				'text': 'Join us for live worship here on Facebook or on live.second.org on Saturday\'s at 6pm CT or Sunday\'s at 9am CT & 11:11am CT.'
			}
        },
        {
            'message': {
				'text': 'If you want to watch previous messages click here: https://vimeo.com/user1021841'
			}
        },
    ],
    'DAILY_DEVOTIONAL': [
        {
            'message': {
				'text': '(something about daily devotional response...)'
			}
        },
    ]
};


module.exports = responses;