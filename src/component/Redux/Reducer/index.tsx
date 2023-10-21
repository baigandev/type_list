const initialState = {
    inputValue: ""
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_INPUT_VALUE':
            return {
                ...state,
                inputValue: action.payload
            };
        default:
            return state;
    }
};
export default reducer;