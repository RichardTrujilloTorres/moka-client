import BaseRepository from "./base.repository";
import api from "../../config/api.config";
import options from "./options.default";

class RolesRepository extends BaseRepository{
    constructor(props = options) {
        super(`${api.baseURL}/roles`,
            props
        );
    }
}

export default RolesRepository
