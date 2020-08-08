import React from "react";

import {ReduxStoreType} from "../../../redux/store";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

type PostDataTypePropsType = {
    store:  ReduxStoreType
}

const MyPostsContainer = (props: PostDataTypePropsType) => {

    let state = props.store.getState();

    const addPostOnClick = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onChangeTextArea = (textPost: string) => {
        let action = updatePostTextActionCreator(textPost)
        props.store.dispatch(action);
    }
    return (
        <MyPosts onChangeTextArea={onChangeTextArea}
                 addPostOnClick={addPostOnClick}
                 postData={state.profilePage.postData}
                 newPostText={state.profilePage.newPostText}
        />
    );
};

export default MyPostsContainer;
