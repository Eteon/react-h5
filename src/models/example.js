export default {
    namespace: 'example',
    state: {
        count: 1,
    },
    effects: {},
    reducers: {
        add(state, action) {
            return {
                ...state,
                count: state.count + action.num
            }
        }
    },
};
