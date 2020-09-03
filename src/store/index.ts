import { createStore, applyMiddleware, Store } from "redux";
// import rootReducers from './../reducers';
import createSagaMiddleware from 'redux-saga'
import { rootReducers } from "../reducer";
import { logger } from 'redux-logger';
import rootSaga from "../saga";
const sagaMiddleware = createSagaMiddleware();
const store: Store<any> = createStore(rootReducers, applyMiddleware(sagaMiddleware , logger));
sagaMiddleware.run(rootSaga);
export const rootStore = store;