import { FETCH_USER_START, FETCHED_USER } from "../action/typesAction.js";

const INITIAL_STATE = {
  isLoading: false,
  users: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return { ...state, isLoading: true };
      break;
    case FETCHED_USER:
      if (action.error) {
        return { ...state, isLoading: false };
      }
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };
      console.log("this is rudcers", users);
      break;
    default:
      return state;
  }
};
export default userReducer;
