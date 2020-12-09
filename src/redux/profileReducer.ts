import {ThunkAction} from "redux-thunk";
import {RootStateRedux} from "./redux-store";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const ON_CHANGE_TEXTAREA = "ON-CHANGE-TEXTAREA";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const UPDATE_PHOTO = "UPDATE_PHOTO";
const UPDATE_PROFILE = "UPDATE_PROFILE";


let initialState: ProfilePageType = {
    postData: [
        {id: 1, post: "It's first post", likes: 10},
        {id: 2, post: "It's second post", likes: 110},
        {id: 3, post: "It's third post", likes: 22},
        {id: 4, post: "It's fourth post", likes: 1},
    ],
    profile: null,
    status: "",
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {
                id: new Date().getTime(),
                post: action.postBody,
                likes: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state, status: action.status
            }
        case DELETE_POST:
            return {
                ...state, postData: state.postData.filter(post => post.id !== action.id)
            }
        case UPDATE_PHOTO:
            return <ProfilePageType>{
                ...state, profile: {...state.profile, photos: action.photos}
            }
     case UPDATE_PROFILE:
            return <ProfilePageType>{
                ...state, profile: action.updateProfileModel
            }

        default:
            return state
    }
}
//actions
export const addPostActionCreator = (postBody: string): AddPostActionType => ({type: ADD_POST, postBody});

export const updatePostTextActionCreator = (textPost: string): OnChangeTextAreaActionType =>
    ({type: ON_CHANGE_TEXTAREA, textPost: textPost});

export const setUserProfileAC = (profile: ProfileType): SetUserProfile =>
    ({type: SET_USER_PROFILE, profile});
export const setUserStatusAC = (status: string): SetUserStatus =>
    ({type: SET_USER_STATUS, status});
export const deletePostAC = (id: number) => ({type: DELETE_POST, id} as const);
export const updatePhotoAC = (photos: PhotosType) => ({type: UPDATE_PHOTO, photos} as const);
export const updateProfileAC = (updateProfileModel: ProfileType) => ({type: UPDATE_PROFILE, updateProfileModel} as const);

//thunks
export const getProfileThunk = (userId: number): ThunkProfileType => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfileAC(response.data));
}
export const getUserStatusThunk = (userId: number): ThunkProfileType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC(response.data));
}
export const updateUserStatusThunk = (status: string): ThunkProfileType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultcode === 0)
        dispatch(setUserStatusAC(status));
}
export const updateUserPhotoThunk = (photo: Blob): ThunkProfileType => async (dispatch) => {
    let response = await profileAPI.updatePhoto(photo)
    dispatch(updatePhotoAC(response.data.data.photos));
}
export const updateUserProfileThunk = (updateProfileModel: ProfileType): ThunkProfileType => async (dispatch) => {
    let response = await profileAPI.updateProfile(updateProfileModel);
}


//types
type ThunkProfileType = ThunkAction<Promise<void>, RootStateRedux, unknown, ActionsTypes>

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
    postBody: string
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
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof updatePhotoAC>
    | ReturnType<typeof updateProfileAC>


export type ProfilePageType = {
    postData: Array<PostDataType>
    profile: ProfileType | null
    status: string

}
export default profileReducer;