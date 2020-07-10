import React from "react";
import s from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";




type PostDataPropsType = {
    postData: Array<PostDataType>
}




const Profile = (props:PostDataPropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postData={props.postData}/>
        </div>
    );
};

export default Profile;
