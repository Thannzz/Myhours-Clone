import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../Components/auth/auth.reducer";

// const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootReducer = combineReducers({
  login: loginReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
