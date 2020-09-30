import React, {ChangeEvent} from "react";
import s from "./Message.module.scss"

import {DialogItem} from "../DialogItem/DialogItem";
import {DialogsDataType, MessagesDataType} from "../../../redux/dialogsReducer";
import { Redirect } from "react-router-dom";
import {Field, InjectedFormProps} from "redux-form";
import {reduxForm} from "redux-form";
import {TextArea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


type MessageTypeProps = {
    message: string
    id: number
}


export type MapStateToPropsTypes = {
    messagesData: Array<MessagesDataType>
    dialogsData:Array<DialogsDataType>
    isAuth: boolean
}

export type MapDispatchToPropsTypes = {
    sendMessage:(message:string)=> void
}

export type OwnPropsTypes = {

}

export type MessagesDataPropsType = MapStateToPropsTypes&MapDispatchToPropsTypes&OwnPropsTypes

const Message = (props: MessageTypeProps) => {
    return <div className={s.dialogs__message}>{props.message}</div>
}

export function Messages(props: MessagesDataPropsType) {

    let messageElements = props.messagesData.map(message => <Message message={message.message} id={message.id}/>)


    const onSubmit = (formData:MessageFormType) =>{
       props.sendMessage(formData.message);
    }
    if(!props.isAuth) return <Redirect  to={"/login"}/>
    return (

        <div className={s.dialogsMessages}>
            <DialogItem dialogsData={props.dialogsData}/>
            {messageElements}
            {/*<textarea onChange={onChangeTextMessage} value={props.newMessageText} placeholder={"Enter your message"}/>*/}
            {/*<button onClick={sendMessage}>send</button>*/}
            <ReduxMessageForm onSubmit={onSubmit}/>
        </div>
    );
}


type MessageFormType = {
    message: string
}
const maxLength = maxLengthCreator(10);
const MessageForm:React.FC<InjectedFormProps<MessageFormType>> = (props) => {

    return(
        <>
            <form action="#" onSubmit={props.handleSubmit}>
                <Field type="text" placeholder={"message"} name={"message"} id={"message"} component={TextArea}
                       validate={[required,maxLength]}
                />
                <button>send</button>
            </form>
        </>
    );
}

const ReduxMessageForm = reduxForm<MessageFormType>({form: "message"})(MessageForm)