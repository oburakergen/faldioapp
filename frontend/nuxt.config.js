import * as process from 'process';

export default {
    head: {
        titleTemplate: '%s - fal',
        title: 'fal',
        htmlAttrs: {
            lang: 'tr'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            { hid: 'og:title', name: 'og:title', content: 'Laraplay | Dashboard' },
            { hid: 'og:locale', name: 'og:locale', content: 'tr_TR' },
            { hid: 'og:url', name: 'og:url', content: process.env.BASE_URL },
            { hid: 'og:type', name: 'og:type', content: 'website' },
            { hid: 'og:description', name: 'og:description', content: 'Laraplay Admin Dashboard' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        script: [
            { hid: 'lap.js', src: '/lap.js', type: 'text/javascript' }
        ],
        noscript: [
            { innerHTML: 'Body No Scripts', body: true }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,' +
                  '500,500i,600,600i,700,700i,800,800i,900,900i'
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/animate.css',
        '~/assets/css/bootstrap.min.css',
        '~/assets/css/flaticon.css',
        '~/assets/css/boxicons.min.css',
        '~/assets/css/main.scss',
        '~/assets/css/it-startup.scss',
        '~/assets/css/developer.scss',
        '~/assets/css/web-hosting.scss',
        '~/assets/css/iot.scss',
        '~/assets/css/machine-learning.scss',
        '~/assets/css/digital-agency.scss',
        '~/assets/css/agency-portfolio.scss',
        '~/assets/css/bigdata-analytics.scss',
        '~/assets/css/shop.scss',
        '~/assets/css/products-details.scss',
        '~/assets/css/cart.scss',
        '~/assets/css/checkout.scss',
        '~/assets/css/repair-center.scss',
        '~/assets/css/features.scss',
        '~/assets/css/service-details.scss',
        '~/assets/css/feature-details.scss',
        '~/assets/css/feedback.scss',
        '~/assets/css/projects.scss',
        '~/assets/css/project-details.scss',
        '~/assets/css/team.scss',
        '~/assets/css/coming-soon.scss',
        '~/assets/css/blog.scss',
        '~/assets/css/blog-details.scss',
        '~/assets/css/contact.scss',
        '~/assets/css/responsive.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/vue-carousel', ssr: false },
        { src: '~/plugins/axios', mode: 'client' },
        { src: '~/plugins/vue-backtotop', ssr: false },
        { src: '~/plugins/feather-icons', ssr: false },
        { src: '~/plugins/vue-feather', ssr: false },
        { src: '~/plugins/v-wow', ssr: false },
        { src: '~/plugins/vue-toastification', ssr: false }
    ],

    // Globally configure <nuxt-link> default active class.
    router: {
        linkPrefetchedClass: 'preloaded',
        linkActiveClass: 'active',
        prefetchLinks: false,
        middleware: 'user-agent'
    },

    axios: {
        baseURL: process.env.BACKEND_URL,
        headers: {
            common: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    },

    publicRuntimeConfig: {
        axios: {
            browserBaseURL: process.env.BACKEND_URL
        },
        sentry: {
            config: {
                environment: process.env.SENTRY_DSN
            },
            serverConfig: {
                // Any server-specific config
            },
            clientConfig: {
                // Any client-specific config
            }
        }
    },

    privateRuntimeConfig: {
        axios: {
            baseURL: process.env.BACKEND_URL
        }
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        '@nuxtjs/sentry'
    ],

    sentry: {
        dsn: process.env.SENTRY_DSN, // Enter your project's DSN here
        // Additional Module Options go here
        // https://sentry.nuxtjs.org/sentry/options
        config: {
            // Add native Sentry config here
            // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true,
        filenames: {
            chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js')
        },
        minifyCSS: true,
        minifyJS: true,
        babel: {
            compact: true
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        extend (config, { isClient }) {
            if (isClient) {
                config.devtool = 'source-map';
            }
        }
    },
    generate: {
        dir: 'build_pages', // gh_pages/ instead of dist/
        subFolders: false // HTML files are generated according to the route path
    }
};
