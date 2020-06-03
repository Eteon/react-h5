export default class ExtendRequestMethod {
    constructor(config) {
        this.config = config;
    };
    static postContentType = 'form' | 'formData' | 'xml';
    post(customizeOptions = {}) {
        const { config } = this;
        if (config?.tranType) {
            switch (config.tranType) {
            case 'form':
                config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
                break;
            case 'formData':
                config.headers['Content-Type'] = 'multipart/form-data'
                break;
            case 'xml':
                config.headers['Content-Type'] = 'text/xml'
                break;

            default:
                break;
            };
            return {
                ...config,
                ...customizeOptions,
            };
        }
        return config;
    };
    put() { }
};