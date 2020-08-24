import {ActionsTypes, PostDataType,} from "./store";

const ADD_POST = "ADD-POST";
const ON_CHANGE_TEXTAREA = "ON-CHANGE-TEXTAREA";

export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}

let initialState: ProfilePageType = {
    postData: [
        {id: 1, post: "It's first post", likes: 10},
        {id: 2, post: "It's second post", likes: 110},
        {id: 3, post: "It's third post", likes: 22},
        {id: 4, post: "It's fourth post", likes: 1},
    ],
    newPostText: ""
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

        default:
            return state
    }
}

export const addPostActionCreator = (): ActionsTypes => ({type: ADD_POST});

export const updatePostTextActionCreator = (textPost: string): ActionsTypes =>
    ({type: ON_CHANGE_TEXTAREA, textPost: textPost});

export default profileReducer;