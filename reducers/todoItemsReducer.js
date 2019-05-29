import { TODO_OPERATIONS } from '../actions/actionTypes'

const initialState = {
    todos: [
        {
            id: 1,
            text: "Learn ReactNative",
            completed: true
        },
        {
            id: 2,
            text: "Learn Redux",
            completed: false
        },
        {
            id: 3,
            text: "I want to see how long this task will look like in my app I want to see how long this task will look like in my app FIRST",
            completed: false
        },
        {
            id: 4,
            text: "I want to see how long this task will look like in my app I want to see how long this task will look like in my app SECOND",
            completed: false
        },
        {
            id: 5,
            text: "Are you scared?",
            completed: true
        }
    ]
}

const todos = (state = initialState.todos, action) => {
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
        default:
            return state
    }
}

export default todos