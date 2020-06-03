import request from '@/utils/request';

export function getMockData(){
    return request.get('/app/mock/223831/menu');
};