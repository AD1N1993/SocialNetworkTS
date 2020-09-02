
const ADD_POST = "ADD-POST";
const ON_CHANGE_TEXTAREA = "ON-CHANGE-TEXTAREA";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export type PostDataType = {
    id: number
    post: string
    likes: number
}
type ContactType={
    facebook: string
    github: string
    instagram:string
    mainLink: string
    twitter: string
    vk: string
    website: string
    youtube: string
}
type PhotosType ={
small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactType
    fullName:string
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
    profile:ProfileType
}
export type ActionsTypes =  AddPostActionType | OnChangeTextAreaActionType | SetUserProfile



export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
    profile: ProfileType | null
}

let initialState: ProfilePageType = {
    postData: [
        {id: 1, post: "It's first post", likes: 10},
        {id: 2, post: "It's second post", likes: 110},
        {id: 3, post: "It's third post", likes: 22},
        {id: 4, post: "It's fourth post", likes: 1},
    ],
    newPostText: "",
    profile: null
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

        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});

export const updatePostTextActionCreator = (textPost: string): OnChangeTextAreaActionType =>
    ({type: ON_CHANGE_TEXTAREA, textPost: textPost});

export const setUserProfileAC = (profile: ProfileType):SetUserProfile =>
        ({ type: SET_USER_PROFILE, profile});

export default profileReducer;