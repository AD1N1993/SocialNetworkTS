import {ThunkAction} from "redux-thunk";
import {RootStateRedux} from "./redux-store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = "SET_USERS_DATA";

export type loginPageType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type setUsersDataAC = {
    type: "SET_USERS_DATA"
    payload: loginPageType
    isAuth: boolean
}
type LoginUserAC = {
    type: "LOGIN_USER"
}

type ActionsTypes = setUsersDataAC|LoginUserAC

let initialState: loginPageType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: loginPageType = initialState, action: ActionsTypes): loginPageType => {
    switch (action.type) {

        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.isAuth
            }

        default:
            return state
    }
}

export const setUsersDataAC = (data: loginPageType,isAuth:boolean): setUsersDataAC => ({type: SET_USERS_DATA, payload: data, isAuth});

type ThunkType = ThunkAction<Promise<void>, RootStateRedux, unknown, ActionsTypes>

export const checkLoginStateThunk = ():ThunkType =>{
    return async (dispatch)=>{
        authAPI.me().then(response => {
            if(response.data.resultCode === 0) {
               dispatch(setUsersDataAC(response.data.data, true));
            }

        })
    }
}
export const LoginThunk = (email:string,password:string,rememberMe:boolean):ThunkType =>{
    return async (dispatch)=>{

        authAPI.login(email, password, rememberMe).then(response => {
            if(response.data.resultCode === 0) {
                dispatch( checkLoginStateThunk());
            }else {
                debugger
                let message = response.data.messages.length > 0 ? response.data.message[0] : "Email or password" +
                    " incorrect";
                dispatch(stopSubmit("login",{_error: message}));
            }

        })
    }
}
export const LogoutThunk = ():ThunkType =>{
    return async (dispatch)=>{
        authAPI.logout().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUsersDataAC({...response.data.data, login:null, email:null, id:null}, false));
            }
        })
    }
}

export default authReducer;