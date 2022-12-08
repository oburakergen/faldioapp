const { core } = require('../core');

const state = () => ({
    contactForm: []
});

const mutations = {

};

const actions = {
    async createContactForm ({ commit }, data) {
        return await this.$axios.$post(
            '/api/contact-forms',
            { data }
        ).then(res => res).catch(err => err);
    }
};

const getters = {

};

export default {
    state, mutations, actions, getters
};
