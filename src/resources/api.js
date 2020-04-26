import UsersRepository from "./repository/users.repository";


const repositories = {
    users: new UsersRepository(),
};

const target = {}
const handler = {
    get: (target, name) => {
        if (repositories[name] !== undefined) {
            return repositories[name]
        }
    },
}

const api = new Proxy(target, handler);

export default api
