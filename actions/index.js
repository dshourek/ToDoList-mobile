import { 
    TODO_OPERATIONS,
    SET_VISIBILITY_FILTER,
    FETCH_FILTERS
} from './actionTypes'

export const addTodo = (text) => ({
    type: TODO_OPERATIONS.ADD_TODO,
    text
})

export const toggleTodo = (id) => ({
    type: TODO_OPERATIONS.TOGGLE_TODO,
    id
})

export const removeTodo = (id) => ({
    type: TODO_OPERATIONS.REMOVE_TODO,
    id
})

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
})

export const fetchTodosRequest = () => ({
    type: FETCH_FILTERS.FETCH_TODOS_REQUEST,
})

export const fetchTodosFail = (error) => ({
    type: FETCH_FILTERS.FETCH_TODOS_FAIL,
    error
})

export const fetchTodosSuccess = (todos) => ({
    type: FETCH_FILTERS.FETCH_TODOS_SUCCESS,
    todos
})

export function fetchTodosData(url) {        
    return (dispatch) => {
        dispatch(fetchTodosRequest());
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            }   
            return response.json()})
        .then(todos => dispatch(fetchTodosSuccess(todos)))
        .catch(error => dispatch(fetchTodosFail(error)))
    }
}
