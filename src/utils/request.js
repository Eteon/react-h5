import config, { currentEnv } from '@config/dynamicBaseUrl';
import { getCurrentLanguage } from '@/utils/currentInfo';
import { extend } from 'umi-request';

console.log('aaaaa', config, currentEnv);

// 请求拦截器实现
const interceptorRequest = (url, options) => {
    options.headers = {
        ...options.headers,
        'current-language': getCurrentLanguage(), // 添加语言用于国际化
    }
};

// 响应拦截器实现
const interceptorResponse = (response, options) => {
    return response;
};

// 异常处理, 或者覆盖统一的异常处理
const errorHandler = error => {
    console.log('error =>', error);
};

const request = extend({
    prefix: config.baseUrl,
    suffix: '',
    timeout: 3000,
    headers: {
        'Accept-Charset': 'utf-8, gbk, iso-8859-1; q=0.5, *; q=0.1',
        // TODO: 实现一个扩展Class用于扩展请求情况, 可单独管理POST请求, 不用每次都经过拦截器处理
        // 默认application/json, 其他将extendMethod出实现扩展
        'Content-Type': 'application/json',
    },
    useCache: true,
    // responseType: 'json', // @如存在雪花算法场景, 请注释这个配置(json序列化导致丢失精度)
    errorHandler,
});

request.interceptors.request.use(interceptorRequest, { global: false });
request.interceptors.response.use(interceptorResponse, { global: false });
export default request;