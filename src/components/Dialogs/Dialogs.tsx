import React from "react";
import s from "./Dialogs.module.scss"
import {DialogItem} from "./DialogItem/DialogItem";
import {ReduxStoreType} from "../../redux/store";
import {MessagesContainer} from "./Message/MessageContainer";

type DialogsPropsType = {
    store: ReduxStoreType
}
export function Dialogs(props:DialogsPropsType) {
    return (
        <div className={s.dialogs}>
            <DialogItem dialogsData={props.store.getState().messagesPage.dialogsData}/>
            <MessagesContainer store={props.store}/>
        </div>
    );
}