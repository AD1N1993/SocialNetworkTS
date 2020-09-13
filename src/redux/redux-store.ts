
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    sideBarFriend:sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export type RootStateRedux = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

(<any>window).store = store;

export default store;