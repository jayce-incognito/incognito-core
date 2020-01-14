import {combineReducers} from 'redux';
let reducers : any = {};
try {
  const requireModule = require.context('../app', true, /\.reducer.ts/);
  requireModule.keys().forEach(fileName => {
    const filterName = fileName.split('/');
    const reducerName = filterName[filterName.length - 1].split('.')[0];
    if (reducers[reducerName]) {
      console.error(`${reducerName} already exists`);
    } else {
      reducers[reducerName] = requireModule(fileName).default;
    }
  });
} catch (e) {
  console.error('Some error while loading your reducers', e);
  /* handle error */
}
export default combineReducers({...reducers});
