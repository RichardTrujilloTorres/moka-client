import BaseRepository from "./base.repository";
import api from "../../config/api.config";
import options from "./options.default";

class PermissionsRepository extends BaseRepository{
    constructor(props = options) {
        super(`${api.baseURL}/permissions`,
            props
        );
    }
}

export default PermissionsRepository
