import { takeEvery, call, put } from 'redux-saga/effects';

import fetcher from '../fetcher';
import {
  getConsents,
  setConsentsError,
  getConsentsSuccess,
  postConsent,
  postConsentsSuccess,
} from './slice';

function* getConsentsWorker() {
  try {
    const config = {
      method: 'get',
      url: `/consents`,
    };
    const consents = yield call(fetcher, config);
    if (consents.data) {
      yield put(
        getConsentsSuccess({
          data: consents.data.consents,
          meta: {
            totalCount: null,
            totalPages: null,
            currentPage: null,
          },
        })
      );
    } else throw new Error(); // throw manually to avoid duplicating
  } catch (e) {
    yield put(setConsentsError('Cannot fetch consents'));
  }
}

function* postConsentsWorker() {
  try {
    const config = {
      method: 'post',
      url: `/consents`,
    };
    const consent = yield call(fetcher, config);
    if (consent.data) {
      yield put(postConsentsSuccess(consent.data));
    } else throw new Error(); // throw manually to avoid duplicating
  } catch (e) {
    yield put(setConsentsError('Cannot post consents'));
  }
}

function* consentsSaga() {
  yield takeEvery(getConsents.toString(), getConsentsWorker);
  yield takeEvery(postConsent.toString(), postConsentsWorker);
}

export default consentsSaga;
