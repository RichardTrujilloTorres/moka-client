import BaseRepository from "./base.repository";
import api from "../../config/api.config";
import options from "./options.default";

class SearchRepository extends BaseRepository{
    constructor(props = options) {
        super(`${api.baseURL}/search`,
            props
        );
    }

    query(query) {
        return this.axios.get(`/?query=${query}`);
    }
}

export default SearchRepository
