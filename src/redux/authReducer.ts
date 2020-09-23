import {ThunkAction} from "redux-thunk";
import {RootStateRedux} from "./redux-store";
import {authAPI, usersAPI} from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";
const LOGIN_USER = "LOGIN_USER";

export type loginPageType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type setUsersDataAC = {
    type: "SET_USERS_DATA"
    data: loginPageType
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
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export const setUsersDataAC = (data: loginPageType): setUsersDataAC => ({type: SET_USERS_DATA, data});

type ThunkType = ThunkAction<Promise<void>, RootStateRedux, unknown, ActionsTypes>

export const checkLoginStateThunk = ():ThunkType =>{
    return async (dispatch)=>{
        authAPI.me().then(response => {
            if(response.data.resultCode === 0) {
               dispatch(setUsersDataAC(response.data.data));
            }

        })
    }
}
export const LoginStateThunk = (email:string,password:string,rememberMe:boolean):ThunkType =>{
    return async (dispatch)=>{
        authAPI.login(email, password, rememberMe).then(response => {
            if(response.data.resultCode === 0) {
               dispatch(setUsersDataAC(response.data.data));
            }

        })
    }
}

export default authReducer;