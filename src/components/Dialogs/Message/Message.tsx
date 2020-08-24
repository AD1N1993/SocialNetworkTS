import React, {ChangeEvent} from "react";
import s from "./Message.module.scss"
import {DialogsDataType, MessagesDataType, PostDataType} from "../../../redux/store";
import {DialogItem} from "../DialogItem/DialogItem";

type MessageTypeProps = {
    message: string
    id: number
}


export type MapStateToPropsTypes = {
    messagesData: Array<MessagesDataType>
    dialogsData:Array<DialogsDataType>
    newMessageText: string
}

export type MapDispatchToPropsTypes = {
    onChangeTextMessage:(messageText:string)=> void
    sendMessage:()=> void
}

export type OwnPropsTypes = {

}

type MessagesDataPropsType = MapStateToPropsTypes&MapDispatchToPropsTypes&OwnPropsTypes

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
            <DialogItem dialogsData={props.dialogsData}/>
            {messageElements}
            <textarea onChange={onChangeTextMessage} value={props.newMessageText} placeholder={"Enter your message"}/>
            <button onClick={sendMessage}>send</button>
        </div>
    );
}