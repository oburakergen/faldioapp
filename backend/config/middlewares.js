module.exports = ({ env }) => [
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'script-src': ["'self'", 'editor.unlayer.com'],
                    'frame-src': ["'self'", 'editor.unlayer.com'],
                    'connect-src': ["'self'", 'https:'],
                    'img-src': [
                        "'self'",
                        'data:',
                        'blob:',
                        'cdn.jsdelivr.net',
                        'strapi.io',
                        'dl.airtable.com',
                        env('SCALEWAY_BUCKET') +
            '.s3.' +
            env('SCALEWAY_ENDPOINT') +
            '.amazonaws.com'
                    ],
                    'media-src': [
                        "'self'",
                        'data:',
                        'blob:',
                        'dl.airtable.com',
                        env('SCALEWAY_BUCKET') +
                      '.s3.' +
                      env('SCALEWAY_ENDPOINT') +
                      '.amazonaws.com'
                    ],
                    'upgradeInsecureRequests': null
                }
            }
        }
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    {
        name: 'strapi::session',
        config: {
            key: 'fal',
            rolling: true,
            renew: true
        }
    },
    'strapi::favicon',
    'strapi::public'
];
