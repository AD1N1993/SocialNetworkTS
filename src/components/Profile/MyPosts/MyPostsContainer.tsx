import React from "react";
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts, {MapDispatchToPropsTypes, MapStateToPropsTypes, OwnPropsTypes} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateRedux} from "../../../redux/redux-store";
import {Dispatch} from "redux";


let mapStateToProps = (state: RootStateRedux)  => {
    return {
        postData: state.profilePage.postData,
    }
};
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPostOnClick: (postBody:string) => {
            dispatch(addPostActionCreator(postBody))
        },
    }
};


const MyPostsContainer = connect<MapStateToPropsTypes, MapDispatchToPropsTypes, OwnPropsTypes, RootStateRedux>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
