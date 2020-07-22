import BaseRepository from "./base.repository";
import api from "../../config/api.config";
import options from "./options.default";

class HistoriesRepository extends BaseRepository{
    constructor(props = options) {
        super(`${api.baseURL}/histories`,
            props
        );
    }

    forResource(options) {
        let {resource, params} = options;
        return this.axios.get(
            `/${resource}`,
            { params:  params !== null ? params : {page: 1, per_page: 5}});
    }
}

export default HistoriesRepository
