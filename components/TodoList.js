import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const TodoList = ({ todos, toggleTodo }) => (
    <View style={{ padding: 20 }}>
        {todos.map(todo =>
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <Text style={{
                    fontSize: 24,
                    textDecorationLine: todo.completed ? 'line-through' : 'none'
                }}>{todo.text}</Text>
            </TouchableOpacity>
        )}
    </View>
)

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});