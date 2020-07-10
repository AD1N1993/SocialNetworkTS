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

export type ProfilePageType = {
    postData: Array<PostDataType>
}
export type MessagesPage = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPage
}

let state: RootStateType = {
    profilePage: {
        postData: [
            {id: 1, post: "It's first post", likes: 10},
            {id: 2, post: "It's second post", likes: 110},
            {id: 3, post: "It's third post", likes: 22},
            {id: 4, post: "It's fourth post", likes: 1},
        ]
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
    }


}

export default state;