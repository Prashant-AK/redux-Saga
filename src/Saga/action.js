import * as types from "./actionTypes";

export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START,
});
export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});
export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});

export const createUsersStart = (user) => ({
  type: types.CREATE_USERS_START,
  payload: user,
});
export const createUsersSuccess = () => ({
  type: types.CREATE_USERS_SUCCESS,
});
export const createUsersError = (error) => ({
  type: types.CREATE_USERS_ERROR,
  payload: error,
});

export const deleteUsersStart = (id) => ({
  type: types.DELETE_USERS_START,
  payload: id,
});
export const deleteUsersSuccess = (id) => ({
  type: types.DELETE_USERS_SUCCESS,
  payload: id,
});
export const deleteUsersError = (error) => ({
  type: types.DELETE_USERS_ERROR,
  payload: error,
});

export const loginUsersStart = () => ({
  type: types.LOGIN_USERS_START,
});
export const loginUsersSuccess = () => ({
  type: types.LOGIN_USERS_SUCCESS,
});
export const loginUsersError = (error) => ({
  type: types.LOGIN_USERS_ERROR,
  payload: error,
});

export const logoutUsersStart = () => ({
  type: types.LOGOUT_USERS_START,
});
export const logoutUsersSuccess = () => ({
  type: types.LOGOUT_USERS_SUCCESS,
});
export const logoutUsersError = (error) => ({
  type: types.LOGOUT_USERS_ERROR,
  payload: error,
});
