'use strict';

module.exports = (plugin) => {
    // Get current `MenuItem` attributes.
    const defaultAttrs = plugin.contentTypes['menu-item'].schema.attributes;

    // Define custom attributes for `MenuItem` the same way they would be defined
    // on any other schema.
    const customAttrs = {
        count: {
            type: 'integer'
        },
        special_order: {
            type: 'integer'
        },
        detail: {
            type: 'richtext'
        },
        choose_class: {
            type: 'enumeration',
            enum: [
                'btn-light',
                'btn-primary'
            ]
        },
        photo: {
            type: 'media',
            allowedTypes: ['images'],
            multiple: false
        }
    };

    plugin.contentTypes['menu-item'].lifecycles = {
        afterFindOne (result, params, populate) {
            console.log('Girdi1');
        }
    };

    plugin.contentTypes['menu'].lifecycles = {
        afterFindMany (result, params, populate) {
            console.log('Girdi2');
        }
    };

    // Extend the `MenuItem` content type with custom attributes.

    plugin.contentTypes['menu-item'].schema.attributes = {
        ...defaultAttrs,
        ...customAttrs
    };

    return plugin;
};
