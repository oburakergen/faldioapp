/*
 * Copyright (c) 2021/10/4 Burak ERGEN
 */

export default function ({ $axios, env, store }) {
    $axios.onRequest((config) => {
        if (config.method.toUpperCase() !== 'GET') {
            $axios.setToken(store.state._csrf, 'x-csrf-token');
        }
    });

    $axios.onError((error) => {
        if (error.response.status) {
            console.log(error.message);
        }

        return Promise.resolve(false);
    });
}
