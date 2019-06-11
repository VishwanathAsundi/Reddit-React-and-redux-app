import * as actionType from '../actions/actionsTypes';

const initailState = {
    loader: true,
    postData: [],
    error: null
}
const reducer = (state = initailState, action) => {
    switch (action.type) {
        case actionType.FETCH_DATA:
            return { ...state, postData: [], loader: true };
        case actionType.SUCCES_FETCH_DATA:
            return { ...state, postData: action.postData, loader: false };
        case actionType.FAILED_FETCH_DATA:
            return { ...state, error: action.error };
        default:
            return { ...state };
    }
}

export default reducer;