// combineReducers - собирает все reducers в одно

import { combineReducers } from "redux";
import users from "./users";

export default combineReducers({
    users
});