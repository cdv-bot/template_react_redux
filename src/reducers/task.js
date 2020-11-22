const initialStale = { listTask: [], taskEditing: null };

const reducer = (state = initialStale, action) => {
    switch (action.type) {
        case 'HAMEO': {
            return state;
        }

        default: {
            return state;
        }
    }
};

export default reducer;