import * as types from "./actionTypes";
import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  fork,
  delay,
  call,
} from "redux-saga/effects";
import {
  loadUsersSuccess,
  loadUsersError,
  createUsersSuccess,
  createUsersError,
  deleteUsersSuccess,
  deleteUsersError,
  loginUsersSuccess,
  loginUsersError,
  logoutUsersSuccess,
  logoutUsersError,
} from "./action";
import { getList, addFriend, deleteFrd } from "../Application/ApiCall";

// LOAD FRIEND
function* onLoadUserStartAsync() {
  try {
    yield delay(500);
    const response = yield call(getList);

    yield put(loadUsersSuccess(response));
  } catch (error) {
    yield put(loadUsersError(error.response));
  }
}

function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUserStartAsync);
}

// CREATE FRIEND
function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(addFriend, payload);

    yield put(createUsersSuccess(response));
  } catch (error) {
    yield put(createUsersError(error.response));
  }
}
function* onCreateUsers() {
  yield takeLatest(types.CREATE_USERS_START, onCreateUserStartAsync);
}

// DELETE FRIEND
function* onDeleteUserStartAsync(userId) {
  try {
    const response = yield call(deleteFrd, userId);
    yield delay(500);
    yield put(deleteUsersSuccess(userId));
  } catch (error) {
    yield put(deleteUsersError(error.response));
  }
}
function* ondDeleteUsers() {
  while (true) {
    const { payload: userId } = yield take(types.DELETE_USERS_START);
    yield call(onDeleteUserStartAsync, userId);
  }
}

// Login
function* onLoginUserStartAsync() {
  try {
    yield put(loginUsersSuccess);
  } catch (error) {
    yield put(loginUsersError(error.response));
  }
}
function* onLoginUsers() {
  yield take(types.LOGIN_USERS_START, onLoginUserStartAsync);
}

// Logout
function* onLogoutUserStartAsync() {
  try {
    yield put(logoutUsersSuccess);
  } catch (error) {
    yield put(logoutUsersError(error.response));
  }
}
function* onLogoutUsers() {
  yield take(types.LOGIN_USERS_START, onLogoutUserStartAsync);
}
const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUsers),
  fork(ondDeleteUsers),
  fork(onLoginUsers),
  fork(onLogoutUsers),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
