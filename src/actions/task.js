export const fetchListTask = (params = {}) => {
    return {
        type: FETCH_TASK,
        payload: {
            params
        }
    }
};
