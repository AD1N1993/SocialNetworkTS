import React from "react";
import s from "./Dialogitem.module.scss"
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../../redux/state";

type DialogTypeProps = {
    name: string
    id: number
}

type DialogItemType =  {
    dialogsData: Array<DialogsDataType>
}

const Dialog = (props: DialogTypeProps) => {
    let path = '/dialogs/' + props.id;
    return (
        <li className={s.dialog__item}>
            <NavLink className={s.dialog__itemLink} to={path}>{props.name}</NavLink>
        </li>
    );
}

export function DialogItem(props: DialogItemType) {

    let dialogsElements = props.dialogsData.map(name=> <Dialog name={name.name} id={name.id} />)
    return (
            <ul className={s.dialogsItems}>
                { dialogsElements }
            </ul>
    );
}