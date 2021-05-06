import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import consentsReducer from './consents/slice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    consents: consentsReducer,
  },
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;
