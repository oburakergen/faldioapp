const state = () => ({
    mainBanner: {},
    boxesArea: [],
    registerArea: {},
    topUser: {},
    funfact: {},
    feature: [],
    freeTrial: {}
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
    setTopUser (state, payload) {
        state.registerArea = payload;
    },
    setFunfactArea (state, payload) {
        state.funfact = payload;
    },
    setFeatureArea (state, payload) {
        state.feature = payload;
    },
    setFreeTrialArea (state, payload) {
        state.freeTrial = payload;
    }
};

const actions = {
    async getHomePage ({ commit }, params) {
        const response = await this.$axios.$get(
            '/api/home-page' + params
        ).then(res => res);
        const data = response?.data?.attributes || {};

        commit('setFunfactArea', data?.fuctact?.shift());
        commit('setFeatureArea', data?.feature);
        commit('setFreeTrialArea', data?.free_trial?.shift());

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
    getFunfactArea: (state) => {
        return state.funfact || {};
    },
    getFeatureArea: (state) => {
        return state.feature || [];
    },
    getFreeTrialArea: (state) => {
        return state.freeTrial || {};
    }
};

export default {
    state, mutations, actions, getters
};
