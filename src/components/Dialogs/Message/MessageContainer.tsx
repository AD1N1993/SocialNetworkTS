import React from "react";
import {MapDispatchToPropsTypes, MapStateToPropsTypes, Messages,  OwnPropsTypes} from "./Message";
import {connect} from "react-redux";
import {RootStateRedux} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {addMessageActionCreator} from "../../../redux/dialogsReducer";

let mapStateToProps = (state: RootStateRedux) => {
    return {
        messagesData: state.messagesPage.messagesData,
        dialogsData:state.messagesPage.dialogsData,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (message:string) => {
            dispatch(addMessageActionCreator(message));
        }
    }
}


export const MessagesContainer = compose<React.ComponentType>(
    connect<MapStateToPropsTypes,MapDispatchToPropsTypes,OwnPropsTypes,RootStateRedux>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Messages)