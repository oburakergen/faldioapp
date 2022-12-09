const { core } = require('../core');

const state = () => ({
    mainBanner: {},
    boxesArea: [],
    registerArea: {},
    feedback: {},
    funfact: {},
    feature: [],
    pricing: {},
    blog: [],
    freeTrial: {},
    homeSeo: {}
});

const mutations = {
    setMainBanner (state, payload) {
        state.mainBanner = payload;
    },
    setBoxesArea (state, payload) {
        state.boxesArea = payload;
    },
    setRegisterArea (state, payload) {
        state.registerArea = payload;
    },
    setFeedback (state, payload) {
        state.feedback = payload;
    },
    setFunfactArea (state, payload) {
        state.funfact = payload;
    },
    setFeatureArea (state, payload) {
        state.feature = payload;
    },
    setPricingArea (state, payload) {
        state.pricing = payload;
    },
    setBlog (state, payload) {
        state.blog = payload;
    },
    setFreeTrialArea (state, payload) {
        state.freeTrial = payload;
    },
    setHomeSeo (state, payload) {
        state.homeSeo = payload;
    }
};

const actions = {
    async getHomePage ({ commit }, params) {
        const response = await this.$axios.$get(
            '/api/home-page' + params
        ).then(res => res);
        const data = response?.data?.attributes || {};

        (data?.fuctact || [])[0] && commit('setFunfactArea', data?.fuctact?.shift());
        data?.feature && commit('setFeatureArea', data?.feature);
        (data?.free_trial || [])[0] && commit('setFreeTrialArea', data?.free_trial?.shift());
        (data?.feedback || [])[0] && commit('setFeedback', data?.feedback?.shift());
        (data?.blog || [])[0] && commit('setBlog', data?.blog?.shift());
        (data?.pricing || [])[0] && commit('setPricingArea', data?.pricing?.shift());
        data?.seo && commit('setHomeSeo', data?.seo);

        (data?.main_banner || []).map((item) => {
            if (item.__component === 'sections.register-form-section') {
                commit('setRegisterArea', item);
            } else if (item.__component === 'sections.main-banner-section') {
                commit('setMainBanner', {
                    title: item.title,
                    detail: item.detail,
                    active: item.active,
                    button: item.button
                });
                commit('setBoxesArea', item.boxes_areas);
            }

            return false;
        });
    }
};

const getters = {
    getMainBanner: (state) => {
        return state.mainBanner;
    },
    getBoxesArea: (state) => {
        return state.boxesArea;
    },
    getRegisterArea: (state) => {
        return state.registerArea;
    },
    getFeedbackArea: (state) => {
        return state.feedback || {};
    },
    getFunfactArea: (state) => {
        return state.funfact || {};
    },
    getFeatureArea: (state) => {
        return state.feature || [];
    },
    getPricingArea: (state) => {
        console.log(state.pricing);

        return state.pricing || {};
    },
    getBlogArea: (state) => {
        return state.blog || {};
    },
    getFreeTrialArea: (state) => {
        return state.freeTrial || {};
    },
    getHomeSeo: (state) => {
        return core.coreSeo(state.homeSeo);
    }
};

export default {
    state, mutations, actions, getters
};
