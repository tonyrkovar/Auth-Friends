import { axiosWithAuth } from '../utils/axiosWithAuth';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAIL = 'ADD_FRIEND_FAIL';


export const getData = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log('Fired')
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ FETCH_FAIL, payload: err.response }))
}

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIEND_START });
    axiosWithAuth()
        .post('/api/friends', friend)
        .then(res => {
            dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: ADD_FRIEND_FAIL, payload: err.response }))
}

