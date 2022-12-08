'use strict';

/**
 * `count` middleware
 */

module.exports = (config, { strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        strapi.log.info('In count middleware.');
        console.log('sdasdasd');

        await next();
    };
};
