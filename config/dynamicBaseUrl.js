export const currentEnv = process.env.REACT_APP_ENV;
// TODO: 添加环境信息
const BASE_CONFIG = {
    base: {
        baseUrl: 'http://rap2.taobao.org:38080'
    },
    dev: {
        baseUrl: '127.0.0.1',
    }
};

export default BASE_CONFIG[currentEnv] || BASE_CONFIG['base'];