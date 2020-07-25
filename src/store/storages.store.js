import StoragesRepository from "../resources/repository/storages.repository";
import loadingInterceptor from "../resources/interceptors/loading.interceptor";

const Storages = {
    namespaced: true,
    state: {
        storages: [],
        repository: new StoragesRepository({
            interceptors: [loadingInterceptor],
        }),
    },
    mutations: {
        setStorages(state, payload) {
            state.storages = payload;
        },
    },
    actions: {
        getStorages(context, params) {
            return context.state.repository.index(params)
                .then(res => {
                    context.commit('setStorages', res.data.data);

                    return res.data
                });
        },
        regenerate(context) {
            return context.state.repository.regenerate()
                .then(res => {
                    return res.data
                });
        }
    },
    getters: {
        storages(state) {
            return state.storages;
        },
    },
};

export default Storages
