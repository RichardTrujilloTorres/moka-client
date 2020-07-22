import AdminsRepository from "../resources/repository/admins.repository";

const Admins = {
    namespaced: true,
    state: {
        admins: [],
        currentUser: null,
        repository: new AdminsRepository(),
    },
    mutations: {
        setAdmins(state, payload) {
            state.admins = payload;
        },
        setCurrentAdmin(state, payload) {
            state.currentAdmin = payload;
        },
    },
    actions: {
        getAdmins(context, params) {
            return context.state.repository.index(params)
                .then(res => {
                    context.commit('setAdmins', res.data.data);

                    return res.data
                });
        },
        getAdmin(context, id) {
            return context.state.repository.show(id)
                .then(res => context.commit('setCurrentAdmin', res.data.data));
        },
        deleteAdmin(context, id) {
            return context.state.repository.delete(id);
        },
    },
    getters: {
        admins(state) {
            return state.admins;
        },
        user(state) {
            return state.currentAdmin;
        },
    },
};

export default Admins
