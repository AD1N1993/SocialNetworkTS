import React from "react";
import s from "./Message.module.scss"
import {MessagesDataType} from "../../../redux/state";




type MessageTypeProps = {
    message: string
    id: number
}

type MessagesDataPropsType = {
    messagesData: Array<MessagesDataType>
}

const Message = (props: MessageTypeProps) => {
    return <div className={s.dialogs__message}>{props.message}</div>
}

export function Messages(props:MessagesDataPropsType) {
    let messageElements = props.messagesData.map(message => <Message message={message.message} id={message.id}/>)
       return (
            <div className={s.dialogsMessages}>
                { messageElements }
            </div>
    );
}