import { combineReducers } from 'redux'
import todos from './todoItemsReducer'
import fetchReducer from './fetchReducer'
import visibilityFilter from './visibilityFilterReducer'

export default combineReducers({
    todos,
    visibilityFilter, 
    fetchReducer
})