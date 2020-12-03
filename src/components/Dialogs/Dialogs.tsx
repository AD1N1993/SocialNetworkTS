import React from "react";
import s from "./Dialogs.module.scss"
import {MessagesContainer} from "./Message/MessageContainer";

 function Dialogs() {
    return (
        <div className={s.dialogs}>
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;