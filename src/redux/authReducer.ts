import {ThunkAction} from "redux-thunk";
import {RootStateRedux} from "./redux-store";
import {usersAPI} from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";

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

type ActionsTypes = setUsersDataAC

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
        usersAPI.checkLoginState().then(response => {
            if(response.data.resultCode === 0) {
               dispatch(setUsersDataAC(response.data.data));
            }

        })
    }
}

export default authReducer;