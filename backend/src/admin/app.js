const config = {
  locales: [
    'tr'
  ],
  translations: {
    tr: {
      'menus.customFields.count.label': 'Translated Label',
      'menus.customFields.count.placeholder': 'Translated Placeholder',
      'menus.customFields.count.description': 'Translated Description',
    },
  },
  tutorials: false,
  notifications: { release: false },
};

const bootstrap = (app) => {
  console.log('asd');
  console.log(app);
};

export default {
  config,
  bootstrap,
};
