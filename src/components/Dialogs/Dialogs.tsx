import React from "react";
import s from "./Dialogs.module.scss"
import {NavLink} from "react-router-dom";

type DialogTypeProps = {
    name: string
    id: number
}

type MessageTypeProps = {
    message: string
}
const Dialog = (props: DialogTypeProps) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${s.dialogs__name}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props: MessageTypeProps) => {
    return <div className={s.dialogs__message}>{props.message}</div>
}

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={"Alexandr"} id={1}/>
                <Dialog name={"Pavel"} id={2}/>
                <Dialog name={"Yura"} id={3}/>
                <Dialog name={"Valera"} id={4}/>
                <Dialog name={"Aweta"} id={5}/>
            </div>
            <div className={s.dialogsMessages}>
                <Message message={'Hi'} />
                <Message message={'How are you'} />
                <Message message={'Norm_)'} />
            </div>
        </div>
    );
}