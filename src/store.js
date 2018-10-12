import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import userReducer from "./reducers/userReducer.js";
import SpecificUserReduc from "./reducers/specificUserReducer.js";

const red = combineReducers({
  user: userReducer,
  test: SpecificUserReduc
});

const store = createStore(
  red,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
);

export default store;
