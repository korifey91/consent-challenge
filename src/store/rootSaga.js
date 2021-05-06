import { all } from 'redux-saga/effects';

import consentsSaga from './consents/saga';

export default function* rootSaga() {
  yield all([consentsSaga()]);
}
