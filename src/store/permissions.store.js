import PermissionsRepository from "../resources/repository/permissions.repository";

const Permissions = {
    namespaced: true,
    state: {
        permissions: [],
        currentPermission: null,
        repository: new PermissionsRepository(),
    },
    mutations: {
        setPermissions(state, payload) {
            state.permissions = payload;
        },
        setCurrentPermission(state, payload) {
            state.currentPermission = payload;
        },
    },
    actions: {
        getPermissions(context, params) {
            return context.state.repository.index(params)
                .then(res => {
                    context.commit('setPermissions', res.data.data);

                    return res.data
                });
        },
        getPermission(context, id) {
            return context.state.repository.show(id)
                .then(res => context.commit('setCurrentPermission', res.data.data));
        },
        updatePermission(context, {id, data}) {
            return context.state.repository.update(id, data)
                .then(res => context.commit('setCurrentPermission', res.data.data));
        },
        deletePermission(context, id) {
            return context.state.repository.delete(id);
        },
    },
    getters: {
        permissions(state) {
            return state.permissions;
        },
        permission(state) {
            return state.currentPermission;
        },
    },
};

export default Permissions
