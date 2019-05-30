import { TODO_OPERATIONS, FETCH_FILTERS } from '../actions/actionTypes'

const todos = (state = [], action) => {
    let newArray;
    switch (action.type) {
        case TODO_OPERATIONS.ADD_TODO:
            if (action.text !== '') {
                newArray = state.slice();
                return [
                    ...state, {
                        id: newArray.length.toString(),
                        text: action.text,
                        completed: false
                    }
                ]
            }
            else return state
        case TODO_OPERATIONS.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed } :
                    todo)
        case TODO_OPERATIONS.REMOVE_TODO:
            return [
                ...state.filter(todo => todo.id !== action.id),
            ]
        case FETCH_FILTERS.FETCH_TODOS_SUCCESS:
            return action.todos
        default:
            return state
    }
}

export default todos