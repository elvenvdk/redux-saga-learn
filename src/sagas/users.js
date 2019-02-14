import { takeEvery, call, fork } from 'redux-saga/effects';
import { Types } from '../actions/types';
import * as api from '../api/users';

function* getUsers() {
	try {
		const result = yield call(api.getUsers);
		console.log(result);
	} catch (err) {}
}

function* watchGetUsersReq() {
	yield takeEvery(Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [fork(watchGetUsersReq)];

export default usersSagas;
