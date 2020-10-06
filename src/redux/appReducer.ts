import {ThunkAction} from "redux-thunk";
import {RootStateRedux} from "./redux-store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {checkLoginStateThunk} from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type AppReducerType = {
    initialized: boolean
}

type ActionsTypes = ReturnType<typeof initializedSuccessAC>

let initialState: AppReducerType = {
    initialized: false
}

export const appReducer = (state: AppReducerType = initialState, action: ActionsTypes): AppReducerType => {
    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

export const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS} as const);

type ThunkType = ThunkAction<Promise<void>, RootStateRedux, unknown, ActionsTypes>

export const initializeApp = (): ThunkType => {
    return async (dispatch) => {
       let promise =  dispatch(checkLoginStateThunk())
        Promise.all([promise]).then(()=>{
            dispatch(initializedSuccessAC())
        })

    }
}


