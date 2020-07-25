import {app} from './../../main';
import {types} from "./types";

const loadingInterceptor = {
    name: 'loading',
    type: types.complete,
    config: (config) => {
        return config
    },
    response: (res) => {
        app.$eventBus.$emit('loaded');
        return res
    },
    request: (res) => {
        app.$eventBus.$emit('loading');
        return res
    },
    error: (error) => {
        app.$eventBus.$emit('loaded');
        return Promise.reject(error)
    },
};

export default loadingInterceptor
