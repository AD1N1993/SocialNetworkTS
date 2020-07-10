import React from "react";
import s from "./DialogItem.module.scss"
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
        <div className={`${s.dialogs__name}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}





export function DialogItem(props: DialogItemType) {

    let dialogsElements = props.dialogsData.map(name=> <Dialog name={name.name} id={name.id} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
        </div>
    );
}