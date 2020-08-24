import {ActionsTypes, MessagesDataType, MessagesPage} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE"
const ON_CHANGE_MESSAGE_TEXT = "ON CHANGE MESSAGE TEXT";

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
    newMessageText: ""
}

const dialogsReducer = (state: MessagesPage = initialState, action: ActionsTypes): MessagesPage => {

    switch (action.type) {
        case ON_CHANGE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.textMessage
            };

        case ADD_MESSAGE:
            const newMessage: MessagesDataType = {
                id: new Date().getTime(),
                message: state.newMessageText,
            }

            return {
                ...state,
                newMessageText: "",
                messagesData: [...state.messagesData, newMessage],
            }

        default:
            return state
    }
}
export const addMessageActionCreator = (): ActionsTypes => ({type: ADD_MESSAGE});

export const updateMessageTextActionCreator = (textMessage: string): ActionsTypes =>
    ({type: ON_CHANGE_MESSAGE_TEXT, textMessage: textMessage});

export default dialogsReducer;