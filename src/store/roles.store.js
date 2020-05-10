import RolesRepository from "../resources/repository/roles.repository";

const Roles = {
    namespaced: true,
    state: {
        roles: [],
        currentRole: null,
        repository: new RolesRepository(),
    },
    mutations: {
        setRoles(state, payload) {
            state.roles = payload;
        },
        setCurrentRole(state, payload) {
            state.currentRole = payload;
        },
    },
    actions: {
        getRoles(context, params) {
            return context.state.repository.index(params)
                .then(res => {
                    context.commit('setRoles', res.data.data);

                    return res.data
                });
        },
        getRole(context, id) {
            return context.state.repository.show(id)
                .then(res => context.commit('setCurrentRole', res.data.data));
        },
        updateRole(context, {id, data}) {
            return context.state.repository.update(id, data)
                .then(res => context.commit('setCurrentRole', res.data.data));
        },
        deleteRole(context, id) {
            return context.state.repository.delete(id);
        },
    },
    getters: {
        roles(state) {
            return state.roles;
        },
        role(state) {
            return state.currentRole;
        },
    },
};

export default Roles
