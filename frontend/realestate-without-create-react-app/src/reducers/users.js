const initialState = {
    isReady: false,
    items: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        case "SET_IS_READY":
            return {
                ...state,
                isReady: action.payload
            }
            break;
        case "ADD_USER":
            return {
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        default:
            return state;
    }
}