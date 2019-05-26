import { combineReducers } from 'redux'
import todos from './todoItemsReducer'
import visibilityFilter from './visibilityFilterReducer'

export default combineReducers({
    todos,
    visibilityFilter
})