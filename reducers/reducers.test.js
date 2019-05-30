import todoItemsReducer from './todoItemsReducer'
import visibilityFilterReducer from './visibilityFilterReducer'
import fetchReducer from './fetchReducer'
import {
    TODO_OPERATIONS,
    VISIBILITY_FILTERS,
    SET_VISIBILITY_FILTER,
    FETCH_FILTERS 
} from '../actions/actionTypes'

describe('>>>R E D U C E R --- Test reducers', () => {
    it('+++ reducer for ADD_TODO', () => {
        let state = []
        state = todoItemsReducer(state, { type: TODO_OPERATIONS.ADD_TODO, text: 'first' })
        expect(state).toEqual([{ id: '0', text: 'first', completed: false }])
    });
    it('+++ reducer for TOGGLE_TODO', () => {
        let state = [{id: '0', text: 'first', completed: false}]
        state = todoItemsReducer(state, { type: TODO_OPERATIONS.TOGGLE_TODO, id: '0' })
        expect(state).toEqual([{ id: '0', text: 'first', completed: true }])
    });
    it('+++ reducer for REMOVE_TODO', () => {
        let state = [{id: '0', text: 'first', completed: false}, {id: '1', text: 'second', completed: true}]
        state = todoItemsReducer(state, { type: TODO_OPERATIONS.REMOVE_TODO, id: '0' })
        expect(state).toEqual([{ id: '1', text: 'second', completed: true }])
    });
    it('+++ reducer for SET_VISIBILITY_FILTER', () => {
        let state = { visibilityFilter: VISIBILITY_FILTERS.SHOW_ALL }
        state = visibilityFilterReducer(state, { type: SET_VISIBILITY_FILTER, filter: VISIBILITY_FILTERS.SHOW_COMPLETED })
        expect(state).toEqual('SHOW_COMPLETED')
    });
    it('+++ reducer for FETCH_TODOS_REQUEST', () => {
        let state = { isLoading: false, isError: false }
        state = fetchReducer(state, { type: FETCH_FILTERS.FETCH_TODOS_REQUEST })
        expect(state).toEqual({ isLoading: true, isError: false })
    });
    it('+++ reducer for FETCH_TODOS_FAIL', () => {
        let state = { isLoading: false, isError: false }
        state = fetchReducer(state, { type: FETCH_FILTERS.FETCH_TODOS_FAIL })
        expect(state).toEqual({ isLoading: false, isError: true })
    });
    it('+++ reducer for FETCH_TODOS_SUCCESS', () => {
        let state = { isLoading: false, isError: false }
        state = fetchReducer(state, { type: FETCH_FILTERS.FETCH_TODOS_SUCCESS })
        expect(state).toEqual({ isLoading: false, isError: false })
    });
});


