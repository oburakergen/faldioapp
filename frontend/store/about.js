const state = () => ({
    aboutPage: [],
    features: [],
    funfacts: [],
    freeTrials: [],
    topUsers: []
});

const mutations = {
    setAboutPage (state, payload) {
        state.aboutPage = payload;
    },
    setFeatureArea (state, payload) {
        state.features = payload;
    },
    setFunfactArea (state, payload) {
        state.funfacts = payload;
    },
    setFreeTrialArea (state, payload) {
        state.freeTrials = payload;
    },
    setTopUserArea (state, payload) {
        state.topUsers = payload;
    }
};

const actions = {
    async getAboutPage ({ commit }) {
        const data = {
            features: [],
            funfacts: [],
            freeTrials: [],
            topUsers: []
        };
        const resp = await this.$axios.$get(
            '/api/about-page'
        ).then(res => res).catch(err => err);

        commit('setAboutPage', resp.data?.attributes?.detail || '');

        (resp.data?.attributes?.other || []).map((item) => {
            if (item.__component === 'sections.feature-section') {
                data.features.push(item);
            } else if (item.__component === 'sections.funfact-section') {
                data.funfacts.push(item);
            } else if (item.__component === 'sections.free-trial-section') {
                data.freeTrials.push(item);
            } else if (item.__component === 'sections.top-user-section') {
                data.topUsers.push(item);
            }

            return false;
        }).filter(Boolean);

        commit('setFeatureArea', data.features);
        commit('setFunfactArea', data.funfacts);
        commit('setFreeTrialArea', data.freeTrials);
        commit('setTopUserArea', data.topUsers);

        return true;
    }
};

const getters = {
    getAboutPage: (state) => {
        return state.aboutPage || {};
    },
    getFeatureArea: (state) => {
        return state.features || [];
    },
    getFunfactArea: (state) => {
        return state.funfacts || [];
    },
    getFreeTrialArea: (state) => {
        return state.freeTrials || [];
    },
    getTopUserArea: (state) => {
        return state.topUsers || [];
    }
};

export default {
    state, mutations, actions, getters
};
