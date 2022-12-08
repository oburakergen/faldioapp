'use strict';

/**
 * `menu` middleware
 */

module.exports = (config, { strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        console.log('asdasd');
        strapi.log.info('In menu middleware.');

        await next();
    };
};
