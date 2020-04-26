import BaseRepository from "./base.repository";
import api from "../../config/api.config";
import options from "./options.default";

class UsersRepository extends BaseRepository{
    constructor(props = options) {
        super(`${api.baseURL}/users`,
            props
        );
    }
}

export default UsersRepository
