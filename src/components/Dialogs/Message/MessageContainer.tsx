import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogsReducer";
import {MapDispatchToPropsTypes, MapStateToPropsTypes, Messages,  OwnPropsTypes} from "./Message";
import {connect} from "react-redux";
import {RootStateRedux} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";

let mapStateToProps = (state: RootStateRedux) => {
    return {
        messagesData: state.messagesPage.messagesData,
        dialogsData:state.messagesPage.dialogsData,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
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


export const MessagesContainer = compose<React.ComponentType>(
    connect<MapStateToPropsTypes,MapDispatchToPropsTypes,OwnPropsTypes,RootStateRedux>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Messages)