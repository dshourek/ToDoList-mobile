import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
    state = {
        text: ''
    }

    addTodo = (text) => {
        this.props.dispatch(addTodo(text))
        this.setState({ text: '' })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Add new Task"
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => { this.addTodo(this.state.text); Keyboard.dismiss() }}>
                    <View style={styles.iconView}>
                        <Ionicons name="md-add" size={30} style={styles.icon} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        borderColor: '#f2f2e1',
        borderWidth: 1
    },
    input: {
        backgroundColor: '#eaeaea',
        height: 50,
        flex: 1,
        padding: 5,
        fontSize: 16,
        // fontFamily: 'Avenir'
    },
    iconView: {
        height: 50,
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: '#000',
        padding: 10
    }
});