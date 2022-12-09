
const state = () => ({
    menu: [],
    currentMenu: {}
});

const mutations = {
    setMenu (state, payload) {
        state.menu = payload;
    },
    setCurrentMenu (state, payload) {
        state.currentMenu = payload;
    }
};

const actions = {
    async getMenu ({ commit }, params) {
        const t = await this.$axios.$get(
            '/api/menus' + params
        ).then(res => res);

        commit('setMenu', t.data);
    },
    currentMenu ({ state, commit }, params) {
        const menu = state.menu.map((item) => {
            return item.attributes.items.data.map((value) => {
                if (value.attributes.url === params) {
                    return value.attributes;
                }

                return false;
            }).filter(Boolean);
        }).filter(Boolean);

        commit('setCurrentMenu', (menu.map((item) => {
            if ((item || [])[0]?.url) {
                return item[0];
            }

            return false;
        }).filter(Boolean))[0]);

        return menu;
    }
};

const getters = {
    header: (state) => {
        const data = state.menu.map((item) => {
            if (item.attributes.title === 'Header') {
                return item.attributes.items.data.map((value, index) => {
                    if (index < 6) {
                        return {
                            count: value.attributes.count,
                            order: value.attributes.order,
                            title: value.attributes.title,
                            url: value.attributes.url
                        };
                    }

                    return false;
                }).filter(Boolean);
            }

            return false;
        }).filter(Boolean);

        return [...data[0]];
    },
    register: (state) => {
        const data = state.menu.map((item) => {
            if (item.attributes.title === 'Register') {
                return item.attributes.items.data.map((value) => {
                    return {
                        count: value.attributes.count,
                        order: value.attributes.order,
                        title: value.attributes.title,
                        url: value.attributes.url,
                        class: 'btn ' + value.attributes.choose_class
                    };
                }).filter(Boolean);
            }

            return false;
        }).filter(Boolean);

        return [...data[0]];
    },
    footer: (state) => {
        const footer = {
            // eslint-disable-next-line
            'Hakkımızda': [],
            // eslint-disable-next-line
            'İletişim': [],
            // eslint-disable-next-line
            'Kurumsal': [],
            // eslint-disable-next-line
            'Yardım': []
        };

        let name = '';
        const data = state.menu.map((item) => {
            if (item.attributes.title === 'Footer') {
                return item.attributes.items.data.map((value) => {
                    return {
                        count: value.attributes.count,
                        order: value.attributes.order,
                        title: value.attributes.title,
                        url: value.attributes.url,
                        detail: value.attributes.detail
                    };
                }).filter(Boolean);
            }

            return false;
        }).filter(Boolean);

        (data[0]).map((item) => {
            if (item.detail !== '' || item.url === '#') {
                name = item.title;
            }

            if (name !== '' && item.url !== '#') {
                footer[name].push({
                    count: item.count,
                    order: item.order,
                    title: item.title,
                    url: item.url,
                    detail: item.detail
                });
            }

            return false;
        });

        return footer;
    }
};

export default {
    state, mutations, actions, getters
};
