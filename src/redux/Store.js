import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import tasksReducer from "./Reducer";


const rootReducer = combineReducers({tasksReducer});

export const Store = createStore(rootReducer,applyMiddleware(thunk));