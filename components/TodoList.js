import React from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'
import { VISIBILITY_FILTERS } from '../actions/actionTypes'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
    <View style={styles.container}>
        <FlatList
            data={todos}
            renderItem={(o) =>
                <TodoItem
                    text={o.item.text}
                    completed={o.item.completed}
                    onToggleClick={() => { toggleTodo(o.item.id); }}
                    onDeleteClick={() => { removeTodo(o.item.id); }}
                />}
            keyExtractor={(o, index) => index.toString()}
        />
    </View>
)

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VISIBILITY_FILTERS.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.SHOW_ALL:
        default:
            return todos;
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flex: 1
    }
});