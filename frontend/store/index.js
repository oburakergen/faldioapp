const { core } = require('../core');

const state = () => ({
    contact: [],
    contactSeo: {},
    lang: 'en'
});

const mutations = {
    setContact (state, payload) {
        state.form = payload;
    },
    setContactSeo (state, payload) {
        state.contactSeo = payload;
    }
};

const actions = {
    async actionContact ({ commit }) {
        const response = await this.$axios.$get(
            '/api/contact-page?populate=deep'
        ).then(res => res);

        commit('setContact', response?.data?.attributes?.contact);
        commit('setContactSeo', response?.data?.attributes?.seo);
    }

};

const getters = {
    getContact: (state) => {
        return state.form || {};
    },
    getContactSeo: (state) => {
        return core.coreSeo(state.contactSeo);
    }
};

export default {
    state, mutations, actions, getters
};
