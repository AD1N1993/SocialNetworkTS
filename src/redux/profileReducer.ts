import {ActionsTypes, PostDataType,} from "./store";

const ADD_POST = "ADD-POST";
const ON_CHANGE_TEXTAREA = "ON-CHANGE-TEXTAREA";

type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}

let intialState: ProfilePageType = {
    postData: [
        {id: 1, post: "It's first post", likes: 10},
        {id: 2, post: "It's second post", likes: 110},
        {id: 3, post: "It's third post", likes: 22},
        {id: 4, post: "It's fourth post", likes: 1},
    ],
    newPostText: ""
}


const profileReducer = (state: ProfilePageType = intialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likes: 0
            };
            state.postData.push(newPost);
            state.newPostText = "";
            return state;
        case ON_CHANGE_TEXTAREA:
            state.newPostText = action.textPost;
            return state;
        default:
            return state
    }
}

export const addPostActionCreator = (): ActionsTypes => ({type: ADD_POST});

export const updatePostTextActionCreator = (textPost: string): ActionsTypes =>
    ({type: ON_CHANGE_TEXTAREA, textPost: textPost});

export default profileReducer;