import axios from 'axios';

class BaseRepository {
    interceptors = [];

    constructor(baseURL, options = options) {
        this.baseUrl = baseURL;
        this.axios = axios.create({
            baseURL,
            timeout: 1000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            withCredentials: true
        });

        this.bootstrap(options);
    }

    bootstrap(options) {
        // interceptors
        this.setInterceptors(options.interceptors);

        // other
    }

    setInterceptors(interceptors) {
        interceptors.forEach(interceptor => this.setInterceptor(interceptor))
    }

    setInterceptor(interceptor) {
        this.interceptors[interceptor.name] = this.axios.interceptors.request.use(interceptor.config, interceptor.error);
    }

    unsetInterceptor(interceptor) {
        this.axios.interceptors.request.eject(this.interceptors[interceptor.name]);
        delete this.interceptors[interceptor.name]
    }

    index(params = {page: 1, per_page: 10}) {
        return this.axios.get(``, { params });
    }

    show(id) {
        return this.axios.get(`${id}`)
    }

    store(data = {}) {
        return this.axios.post('', data);
    }

    update(id, data = {}) {
        return this.axios.put(id, data);
    }

    delete(id) {
        return this.axios.delete(`${id}`);
    }
}

export default BaseRepository
