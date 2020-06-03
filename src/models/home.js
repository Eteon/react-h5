import { getMockData } from '@/service/home';

export default {
    namespace: 'home',
    state: {
        initData: [],
    },
    effects: {
        *getMockData(payload, saga) {
            yield saga.call(getMockData);
        }
    },
    reducers: {
        save() {
        }
    },
};
