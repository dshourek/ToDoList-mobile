import { FETCH_FILTERS } from '../actions/actionTypes'

const initialState = {
    isLoading: false,
    isError: false
}

const fetchData = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILTERS.FETCH_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_FILTERS.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case FETCH_FILTERS.FETCH_TODOS_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}

export default fetchData