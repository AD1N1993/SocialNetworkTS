import React from "react";
import s from "./Dialogs.module.scss"
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../redux/state";



type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export function Dialogs(props:DialogsPropsType) {
    return (
        <div className={s.dialogs}>
            <DialogItem dialogsData={props.dialogsData}/>
            <Messages messagesData={props.messagesData}/>

        </div>
    );
}