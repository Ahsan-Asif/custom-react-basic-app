import axios from "axios";
import {
  FETCH_USER_START,
  FETCHING_USER_ERROR,
  FETCHED_USER
} from "./typesAction.js";

export const fetchUser = () => {
  return async dispatch => {
    dispatch({ type: FETCH_USER_START });
    try {
      let response = await axios.get("https://api.github.com/users");
      if (response.status === 200) {
        console.log(response.data);
        dispatch({ type: FETCHED_USER, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: FETCHED_USER, payload: error, error: true });
    }
  };
};

//Fetching the Specific user from the api
export const SpecificUser = login => {
  return async dispatch => {
    dispatch({ type: "USER_START_fetcd" });
    try {
      let res = await axios.get(`https://api.github.com/users${login}`);
      if (res.status === 200) {
        console.log("status is ok", res.data);
        dispatch({ type: "USER_fetcd", payload: res.data });
      }
    } catch (error) {
      console.log("Error is here", error);
      dispatch({ type: "USER_fetcd", error: true, payload: error });
    }
  };
};
