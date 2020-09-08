const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"


export type UserDataType = {
    id: number
    name: string
    status: string
    followed: boolean
    avatar: string
    photos: {
        small: string | null
        large: string | null
    }
}
export type usersPageType = {
    usersData: Array<UserDataType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
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

type SetCurrentPageACType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
type SetTotalCountUsersACType = {
    type: "SET_TOTAL_COUNT"
    totalCountUsers: number
}
type SetToggleIsFetchingACType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}
type SetToggleFollowingProgressACType = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS"
    isFetching: boolean
    userId: number
}

type ActionsTypes = FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalCountUsersACType
    | SetToggleIsFetchingACType
    | SetToggleFollowingProgressACType;

let initialState: usersPageType = {
    usersData: [],
    pageSize: 20,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state: usersPageType = initialState, action: ActionsTypes): usersPageType => {
    debugger
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
        case SET_USERS:
            return {...state, usersData: action.users}
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {

                ...state, totalCount: action.totalCountUsers
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:

            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}

export const onFollow = (userID: number): FollowACType => ({type: FOLLOW, userID});

export const unFollow = (userID: number): UnFollowACType => ({type: UN_FOLLOW, userID});

export const setUsers = (users: Array<UserDataType>): SetUsersACType => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage: number): SetCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalCountUsers = (totalCountUsers: number): SetTotalCountUsersACType => ({
    type: SET_TOTAL_COUNT, totalCountUsers
});

export const setToggleIsFetching = (isFetching: boolean): SetToggleIsFetchingACType => ({
    type: TOGGLE_IS_FETCHING, isFetching
});

export const toggleFollowingProgress = (isFetching: boolean, userId: number): SetToggleFollowingProgressACType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
});

export default usersReducer;