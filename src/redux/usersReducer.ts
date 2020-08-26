const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";

type UserLocationType = {
    country: string
    city: string
}

export type UserDataType = {
    id: number
    name: string
    status: string
    followed: boolean
    avatar:string
    photos:{
        small:string|null
        large:string|null
    }
    // location: UserLocationType
}
export type usersPageType = {
    usersData: Array<UserDataType>
}

type FollowACType = {
    type: "FOLLOW"
    userID: number
}
type UnFollowACType = {
    type: "UN_FOLLOW"
    userID: number
}

type  SetUsersACType = {
    type: "SET_USERS"
    users: Array<UserDataType>
}

type ActionsTypes = FollowACType | UnFollowACType | SetUsersACType;

let initialState: usersPageType = {
    usersData: [


    ],
}

const usersReducer = (state: usersPageType = initialState, action: ActionsTypes): usersPageType => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case "SET_USERS":
            return {
                ...state,
                usersData: [...state.usersData, ...action.users]
            }

        default:
            return state
    }
}

export const followAC = (userID: number): ActionsTypes => ({type: FOLLOW, userID: userID});

export const unFollowAC = (userID: number): ActionsTypes => ({type: UN_FOLLOW, userID: userID});

export const setUsersAC = (users: Array<UserDataType>): ActionsTypes => ({type: SET_USERS, users: users});

export default usersReducer;