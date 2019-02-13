import { takeEvery, call, fork } from 'redux-saga/effects';
import * as actions from '../actions/users';
import { Types } from '../actions/types';
import * as api from '../api/users';

function* getUsers() {
  try {
    const result = yield call(api);
    console.log(result);
  }
  catch(err) {

  }
}

function* watchGetUsersReq() {
  yield takeEvery(Types.GET_USERS_REQUEST, getUsers);
}

const usersSaagas = [
  fork(watchGetUsersReq)
];

export default usersSaagas;