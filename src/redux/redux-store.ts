
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./appReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    sideBarFriend:sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    initialized: appReducer
});

export type RootStateRedux = ReturnType<typeof reducers>

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunkMiddleware),
    // other store enhancers if any
));


(<any>window).store = store;

export default store;