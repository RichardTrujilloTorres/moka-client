import BaseRepository from "./base.repository";
import api from "../../config/api.config";
import options from "./options.default";

class StoragesRepository extends BaseRepository{
    constructor(props = options) {
        super(`${api.baseURL}/storage-stats`,
            props
        );
    }

    regenerate() {
        return this.axios.post(`/regenerate`);
    }
}

export default StoragesRepository
