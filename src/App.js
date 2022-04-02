import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';

//import Task component
import Task from './components/Task';

/**
 * Main component of app, receive store and render Task component
 */
class App extends Component {

  render() {
    return (
      <div className="App w-100">
        <Provider store={store}>
          <Task />
        </Provider>
      </div>
    );
  }
}

export default App;
