import BaseRepository from "./base.repository";
import api from "../../config/api.config";
import options from "./options.default";

class HistoriesRepository extends BaseRepository{
    constructor(props = options) {
        super(`${api.baseURL}/histories`,
            props
        );
    }

    forResource(name, params = {page: 1, per_page: 10}) {
        return this.axios.get(`/${name}`, { params });
    }
}

export default HistoriesRepository
