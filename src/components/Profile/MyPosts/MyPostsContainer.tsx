import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts, {MapDispatchToPropsTypes, MapStateToPropsTypes, OwnPropsTypes} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateRedux} from "../../../redux/redux-store";
import {Dispatch} from "redux";


let mapStateToProps = (state: RootStateRedux)  => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPostOnClick: () => {
            dispatch(addPostActionCreator())
        },
        onChangeTextArea: (textPost: string) => {
            let action = updatePostTextActionCreator(textPost)
            dispatch(action);
        }
    }
};


const MyPostsContainer = connect<MapStateToPropsTypes, MapDispatchToPropsTypes, OwnPropsTypes, RootStateRedux>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
