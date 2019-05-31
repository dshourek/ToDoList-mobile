import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux'
import { toggleTodo, removeTodo, fetchTodosData } from '../actions'
import { VISIBILITY_FILTERS } from '../actions/actionTypes'
import TodoItem from './TodoItem'
import BASE_URL from '../baseURL'

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodosData(BASE_URL)
    }

    render() {
        if (this.props.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        if (this.props.isError) {
            return (
                <Text>ERROR</Text>
            )
        }
        
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.todos}
                    renderItem={(o) =>
                        <TodoItem
                            text={o.item.text}
                            completed={o.item.completed}
                            onToggleClick={() => { this.props.toggleTodo(o.item.id); }}
                            onDeleteClick={() => { this.props.removeTodo(o.item.id); }}
                        />}
                    keyExtractor={(o, index) => index.toString()}
                />
            </View>
        );
    }
}

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
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    isLoading: state.isLoading,
    isError: state.isError
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id)),
    fetchTodosData: url => dispatch(fetchTodosData(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flex: 1
    }
});