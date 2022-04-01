//import react and component
import React from 'react';
import { Component } from 'react';
//import provider from redux
import { Provider } from 'react-redux';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Hello World</h1>
          {store.getState().tasks.map(task => (
            <div key={task.id}>
              <h2>{task.description}</h2>
              <p>{task.completed ? 'Completed' : 'Not Completed'}</p>
            </div>
          ))}
        </div>
      </Provider>
    );
  }
}

export default App;
