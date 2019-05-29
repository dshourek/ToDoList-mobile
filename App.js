import React from 'react';
import TodoApplication from './components/TodoApplication'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApplication />
      </Provider>
    );
  }
}
