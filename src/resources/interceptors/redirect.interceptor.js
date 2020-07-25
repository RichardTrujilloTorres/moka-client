import {types} from "./types";
import {app} from "../../main";

const redirectInterceptor = {
    name: 'redirect',
    type: types.response,
    config: (config) => {
        return config
    },
    response: (res) => {
        app.$eventBus.$emit('loaded');
        return res
    },
    error: (error) => {
        console.log('redirect on specific status code');
        app.$eventBus.$emit('loaded');
        return Promise.reject(error)
    },
};

export default redirectInterceptor
