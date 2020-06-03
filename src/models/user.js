import { getUserInfo } from '@/service/user';

export default {
    namespace: 'user',
    state: {
        userInfo: {},
    },

    effects: {
        *getUserInfo(payload, { call, put }) {
            const { data } = yield call(getUserInfo);
            yield put({ type: 'save', payload: data[0] });
        }
    },

    reducers: {
        save(state, action) {
            return {
                ...state,
                userInfo: action.payload
            }
        },
    },
};
