import { 
    TODO_OPERATIONS,
    SET_VISIBILITY_FILTER
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