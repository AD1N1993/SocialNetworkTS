import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";


export type PostDataType = {
    id: number
    post: string
    likes: number
}

export type DialogsDataType = {
    id: number,
    name: string
}

export type MessagesDataType = {
    id: number,
    message: string
}

export type FriendDataType = {
    id: number
    avatarLink: string
    name: string
}

export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}

export type MessagesPage = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
}

export type FriendsDataType = {
    friendsData: Array<FriendDataType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPage
    sideBarFriend: FriendsDataType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void

    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType

    dispatch: (action: ActionsTypes) => void
}
export type ReduxStoreType = {
    subscribe: (observer: () => void) => void
    getState: () => RootStateType

    dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = {
    type: "ADD-POST"
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
}

type OnChangeTextAreaActionType = {
    type: "ON-CHANGE-TEXTAREA"
    textPost: string
}
type OnChangeTextMessageActionType = {
    type: "ON CHANGE MESSAGE TEXT"
    textMessage: string
}


export type ActionsTypes = AddPostActionType
    | OnChangeTextAreaActionType
    | AddMessageActionType
    | OnChangeTextMessageActionType



export type AddPostType = () => void;

export type OnChangeTextArea = (textPost: string) => void


