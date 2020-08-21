import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import logger from "redux-logger";

import {sagas} from "./sagas.saga";

import {reducer} from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);

export default store;