
const ADD_MESSAGE = "ADD-MESSAGE"

export type DialogsDataType = {
    id: number,
    name: string
}

export type MessagesDataType = {
    id: number,
    message: string
}
export type MessagesPage = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}


type AddMessageActionType = {
    type: "ADD-MESSAGE"
    message: string
}

type OnChangeTextMessageActionType = {
    type: "ON CHANGE MESSAGE TEXT"
    textMessage: string
}


type ActionsTypes = AddMessageActionType| OnChangeTextMessageActionType

let initialState: MessagesPage = {
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

const dialogsReducer = (state: MessagesPage = initialState, action: ActionsTypes): MessagesPage => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagesDataType = {
                id: new Date().getTime(),
                message: action.message,
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        default:
            return state
    }
}
export const addMessageActionCreator = (message:string): ActionsTypes => ({type: ADD_MESSAGE, message});


export default dialogsReducer;