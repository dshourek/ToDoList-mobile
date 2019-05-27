import React from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'
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

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
});