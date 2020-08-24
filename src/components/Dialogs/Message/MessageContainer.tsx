import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogsReducer";
import {MapDispatchToPropsTypes, MapStateToPropsTypes, Messages, OwnPropsTypes} from "./Message";
import {connect} from "react-redux";
import {RootStateRedux} from "../../../redux/redux-store";
import {Dispatch} from "redux";

let mapStateToProps = (state: RootStateRedux) => {
    return {
        messagesData: state.messagesPage.messagesData,
        dialogsData:state.messagesPage.dialogsData,
        newMessageText: state.messagesPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChangeTextMessage: (textMessage: string) => {
            let action = updateMessageTextActionCreator(textMessage);
            dispatch(action);
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}
export const MessagesContainer = connect<MapStateToPropsTypes,MapDispatchToPropsTypes,OwnPropsTypes,RootStateRedux>(mapStateToProps, mapDispatchToProps)(Messages);