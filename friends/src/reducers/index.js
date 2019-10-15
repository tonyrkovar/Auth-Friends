import {
    START_FETCHING,
    FETCH_SUCCESS,
    FETCH_FAIL,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAIL
} from '../actions'

const initialState = {
    friends: [
        {
            name: '',
            age: '',
            email: '',
            id: 0
        }
    ],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                friends: action.payload
            }
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_FRIEND_START:
            return {
                ...state,
                isFetching: true,
                error: ''

            }
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                isFetching: false,
                friends: action.payload,
                error: ''
            }
        case ADD_FRIEND_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}