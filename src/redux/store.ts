import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./sagas/rootSagas";
import { reducers } from "./slices/index";

const sagaMiddleware = createSagaMiddleware();

const RootStore = configureStore({
  reducer: {
    ...reducers,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

export type RootState = ReturnType<typeof RootStore.getState>;
export default RootStore;
