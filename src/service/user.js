import request from '@/utils/request';

export function getUserInfo() {
    return request.get('/app/mock/223831/menu');
}