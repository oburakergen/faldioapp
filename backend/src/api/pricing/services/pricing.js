'use strict';

/**
 * pricing-pla service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pricing.pricing');
