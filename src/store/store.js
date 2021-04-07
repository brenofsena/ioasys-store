import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import logger from "redux-logger";

import sagas from "./sagas";
import reducers from "./slices";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(sagas);

export default store;
