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

export default authReducer;