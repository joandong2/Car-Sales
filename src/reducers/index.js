import { combineReducers } from "redux";

import { carReducer } from "./carReducer";
import { featuresReducer } from "./featuresReducer";
// import { dragonListReducer } from "../reducers/dragonListReducer";

export const rootReducer = combineReducers({
    carReducer,
    featuresReducer,
});
