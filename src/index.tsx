import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'src/redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

if (module.hot) module.hot.accept();
