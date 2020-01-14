import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSaga from 'redux-saga';
import rootSaga from './saga';
import thunk from 'redux-thunk';

const saga: any = createSaga();

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(saga, thunk))
);

saga.run(rootSaga);
