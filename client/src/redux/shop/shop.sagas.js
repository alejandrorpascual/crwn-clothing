import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import {
  fecthCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAysnc() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fecthCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAysnc
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
