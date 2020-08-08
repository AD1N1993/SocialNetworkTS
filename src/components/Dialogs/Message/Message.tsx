import React, {ChangeEvent} from "react";
import s from "./Message.module.scss"
import  {ActionsTypes, MessagesDataType} from "../../../redux/store";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogsReducer";

type MessageTypeProps = {
    message: string
    id: number
}

type MessagesDataPropsType = {
    onChangeTextMessage:(messageText:string)=> void
    sendMessage:()=> void
    messagesData: Array<MessagesDataType>
    newMessageText: string
}

const Message = (props: MessageTypeProps) => {
    return <div className={s.dialogs__message}>{props.message}</div>
}

export function Messages(props: MessagesDataPropsType) {

    let messageElements = props.messagesData.map(message => <Message message={message.message} id={message.id}/>)

    const onChangeTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeTextMessage(e.currentTarget.value);

    }
    const sendMessage = () => {
        props.sendMessage();
    }
    return (
        <div className={s.dialogsMessages}>
            {messageElements}
            <textarea onChange={onChangeTextMessage} value={props.newMessageText} placeholder={"Enter your message"}/>
            <button onClick={sendMessage}>send</button>
        </div>
    );
}