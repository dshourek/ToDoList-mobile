import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoApplication from './components/TodoApplication'
import store from './store'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApplication />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
