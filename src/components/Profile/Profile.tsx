import React from "react";
import s from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, AddPostType, OnChangeTextArea, PostDataType} from "../../redux/state";


type PostDataPropsType = {
    postData: Array<PostDataType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void


}

const Profile = (props: PostDataPropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;
