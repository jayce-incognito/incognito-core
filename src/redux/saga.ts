import {fork, all} from 'redux-saga/effects';

let sagas: any[] = [];
const requireModule = require.context('../../src', true, /\.saga.ts/);

requireModule.keys().forEach(fileName => {
    if (requireModule(fileName).default) {
        sagas = [...sagas, ...requireModule(fileName).default];
    }
});

function* rootSagas() {
    const rootSagasForks = sagas.map(saga => fork(saga));
    yield all([...rootSagasForks]);
}
export default rootSagas;
