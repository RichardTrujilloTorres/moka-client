import UsersRepository from "../resources/repository/users.repository";
import loadingInterceptor from "../resources/interceptors/loading.interceptor";

const Users = {
    namespaced: true,
    state: {
        users: [],
        currentUser: null,
        repository: new UsersRepository({
            interceptors: [loadingInterceptor]
        }),
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload;
        },
        setCurrentUser(state, payload) {
            state.currentUser = payload;
        },
    },
    actions: {
        getUsers(context, params) {
            return context.state.repository.index(params)
                .then(res => {
                    context.commit('setUsers', res.data.data);

                    return res.data
                });
        },
        getUser(context, id) {
            return context.state.repository.show(id)
                .then(res => context.commit('setCurrentUser', res.data.data));
        },
        deleteUser(context, id) {
            return context.state.repository.delete(id);
        },
    },
    getters: {
        users(state) {
            return state.users;
        },
        user(state) {
            return state.currentUser;
        },
    },
};

export default Users
