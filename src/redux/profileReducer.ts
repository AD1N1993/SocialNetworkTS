import {ThunkAction} from "redux-thunk";
import {RootStateRedux} from "./redux-store";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const ON_CHANGE_TEXTAREA = "ON-CHANGE-TEXTAREA";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_STATUS";


export type PostDataType = {
    id: number
    post: string
    likes: number
}
export type ContactType = {
    facebook: string
    github: string
    instagram: string
    mainLink: string
    twitter: string
    vk: string
    website: string
    youtube: string
}
type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    userId: number
}


type AddPostActionType = {
    type: "ADD-POST"
}

type OnChangeTextAreaActionType = {
    type: "ON-CHANGE-TEXTAREA"
    textPost: string
}

type SetUserProfile = {
    type: "SET_USER_PROFILE"
    profile: ProfileType
}
type SetUserStatus = {
    type: "SET_STATUS"
    status: string
}


export type ActionsTypes = AddPostActionType
    | OnChangeTextAreaActionType
    | SetUserProfile
    | SetUserStatus


export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
    profile: ProfileType | null
    status: string
}

let initialState: ProfilePageType = {
    postData: [
        {id: 1, post: "It's first post", likes: 10},
        {id: 2, post: "It's second post", likes: 110},
        {id: 3, post: "It's third post", likes: 22},
        {id: 4, post: "It's fourth post", likes: 1},
    ],
    newPostText: "",
    profile: null,
    status: "",
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                newPostText: "",
                postData: [...state.postData, newPost]
            }

        case ON_CHANGE_TEXTAREA:
            return {
                ...state,
                newPostText: action.textPost
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state, status: action.status
            }

        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});

export const updatePostTextActionCreator = (textPost: string): OnChangeTextAreaActionType =>
    ({type: ON_CHANGE_TEXTAREA, textPost: textPost});

export const setUserProfileAC = (profile: ProfileType): SetUserProfile =>
    ({type: SET_USER_PROFILE, profile});
export const setUserStatusAC = (status: string): SetUserStatus =>
    ({type: SET_USER_STATUS, status});


type ThunkProfileType = ThunkAction<Promise<void>, RootStateRedux, unknown, ActionsTypes>
export const getProfileThunk = (userId: number): ThunkProfileType => {
    return async (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data));
        })
    }
}
export const getUserStatusThunk = (userId: number): ThunkProfileType => {
    return async (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatusAC(response.data));
        })
    }
}
export const updateUserStatusThunk = (status: string): ThunkProfileType => {
    return async (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultcode === 0)
                dispatch(setUserStatusAC(status));
        })
    }
}


export default profileReducer;