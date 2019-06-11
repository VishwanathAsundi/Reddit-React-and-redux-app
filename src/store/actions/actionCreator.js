import * as actionType from './actionsTypes';
import axios from 'axios';

export const startFetchData = () => {
    return {
        type: actionType.FETCH_DATA
    }
}
export const successFetchData = (value) => {
    return {
        type: actionType.SUCCES_FETCH_DATA,
        postData: value
    }
}
export const failedFetchData = (error) => {
    return {
        type: actionType.FAILED_FETCH_DATA,
        error: error
    }
}

export const fetchData = (type) => {
    return dispatch => {
        dispatch(startFetchData());
        axios.get(`https://www.reddit.com/r/${type}.json`).then(result => {
            let postData = result.data.data.children;
            dispatch(successFetchData(postData));
        }).catch(err => {
            dispatch(failedFetchData(err));
        });
    }
}