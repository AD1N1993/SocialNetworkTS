import React, {ChangeEvent} from "react";
import  {ReduxStoreType,} from "../../../redux/store";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogsReducer";
import {Messages} from "./Message";

type MessagesContainerPropsType = {
    store: ReduxStoreType
}


export function MessagesContainer(props:  MessagesContainerPropsType) {

    let state = props.store.getState();

        const onChangeTextMessage = (messageText:string) => {
            props.store.dispatch(updateMessageTextActionCreator(messageText));

    }
    const sendMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    return (
       <Messages onChangeTextMessage={onChangeTextMessage}
                 sendMessage={sendMessage}
                 messagesData={state.messagesPage.messagesData}
                 newMessageText={state.messagesPage.newMessageText}/>
    );
}