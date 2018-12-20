import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";
import documentationReducer from "./documentationReducer";

export default combineReducers({
  navigation: navigationReducer,
  documentation: documentationReducer,
});
