import React from "react";
import s from "./Dialogs.module.scss"
import {MessagesContainer} from "./Message/MessageContainer";


export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <MessagesContainer />
        </div>
    );
}