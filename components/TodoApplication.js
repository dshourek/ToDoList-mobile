import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import AddTodoItem from './AddTodoItem'
import TodoList from './TodoList'

class TodoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddTodoItem />
                <View>
                    <TodoList />
                </View>
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    }
});