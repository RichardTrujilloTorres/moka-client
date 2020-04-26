const redirectInterceptor = {
    name: 'redirect',
    config: (config) => {
        return config
    },
    error: (error) => {
        return Promise.reject(error)
    },
};

export default redirectInterceptor
