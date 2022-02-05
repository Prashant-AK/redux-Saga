import * as types from "./actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
  login: false,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USERS_START:
    case types.CREATE_USERS_START:
    case types.DELETE_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_USERS_START:
      return {
        ...state,
        login: true,
      };
    case types.LOGOUT_USERS_START:
      return {
        ...state,
        login: false,
      };
    case types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case types.CREATE_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.DELETE_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case types.LOGIN_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        login: true,
      };
    case types.LOGOUT_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        login: false,
      };
    case types.LOAD_USERS_ERROR:
    case types.CREATE_USERS_ERROR:
    case types.DELETE_USERS_ERROR:
    case types.LOGIN_USERS_ERROR:
    case types.LOGOUT_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default usersReducer;
