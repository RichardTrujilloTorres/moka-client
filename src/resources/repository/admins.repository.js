import BaseRepository from "./base.repository";
import api from "../../config/api.config";
import options from "./options.default";

class AdminsRepository extends BaseRepository{
    constructor(props = options) {
        super(`${api.baseURL}/admins`,
            props
        );
    }
}

export default AdminsRepository
