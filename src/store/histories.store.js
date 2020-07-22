import HistoriesRepository from "../resources/repository/histories.repository";

const Histories = {
    namespaced: true,
    state: {
        histories: [],
        repository: new HistoriesRepository(),
    },
    mutations: {
        setHistories(state, payload) {
            state.histories = payload;
        },
    },
    actions: {
        getHistories(context, options) {
            let {resource, ...params} = options;
            return context.state.repository.forResource(resource, params)
                .then(res => {
                    context.commit('setHistories', res.data.data);

                    return res.data
                });
        },
    },
    getters: {
        histories(state) {
            return state.histories;
        },
    },
};

export default Histories
