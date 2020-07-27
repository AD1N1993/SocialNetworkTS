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

type AddPostActionType = {
    type: "ADD-POST"
}

type OnChangeTextAreaActionType = {
    type: "ON-CHANGE-TEXTAREA"
    textPost: string
}
export type ActionsTypes = AddPostActionType | OnChangeTextAreaActionType


export type AddPostType = () => void;

export type OnChangeTextArea = (textPost: string) => void


const store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, post: "It's first post", likes: 10},
                {id: 2, post: "It's second post", likes: 110},
                {id: 3, post: "It's third post", likes: 22},
                {id: 4, post: "It's fourth post", likes: 1},
            ],
            newPostText: ""
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrew"},
                {id: 3, name: "Alexandr"},
                {id: 4, name: "Pavel"},
                {id: 5, name: "Yura"},
                {id: 6, name: "Valera"}
            ],
            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Norm_"},
                {id: 4, message: "Dnavol"},
                {id: 5, message: "zuMMEr"},
                {id: 6, message: "Dasdas"}
            ],

        },

        sideBarFriend: {
            friendsData: [
                {
                    id: 1,
                    avatarLink: "https://sun9-44.userapi.com/impf/Og0nBt7TJGbkuKkZKSaqt4wGoKimHb0QgNyy6Q/9qoUsJzdhEY.jpg?size=200x0&quality=90&sign=7e863cd91046de72f55c911f94995105&ava=1",
                    name: "Alena Svirida"
                },
                {
                    id: 2,
                    avatarLink: "https://vignette.wikia.nocookie.net/avatar/images/f/f4/3%D1%8521_%D0%90%D0%B0%D0%BD%D0%B3.jpg/revision/latest?cb=20110327121409&path-prefix=ru",
                    name: "Seregaaaaaa Serg"
                }
                ,
                {
                    id: 3,
                    avatarLink:
                        "https://png.pngtree.com/png-clipart/20190906/original/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-png-image_4561296.jpg",
                    name: "Dinossssssssssss Zag"
                }
            ]
        }
    },
    _callSubscriber() {
        console.log("hi")
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action: ActionsTypes) {
        if (action.type === "ADD-POST") {
            const newPost: PostDataType = {
                id: new Date().getTime(),
                post: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === "ON-CHANGE-TEXTAREA") {
            this._state.profilePage.newPostText = action.textPost;
            this._callSubscriber(this._state);
        }
    }

}

export default store;