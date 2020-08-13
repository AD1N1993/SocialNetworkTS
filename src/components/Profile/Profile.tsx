import React from "react";
import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ReduxStoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


// type PostDataPropsType = {
//    store: ReduxStoreType
//
// }

const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer  />
        </div>
    );
};

export default Profile;
