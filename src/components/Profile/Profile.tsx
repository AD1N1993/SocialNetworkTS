import React from "react";
import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ReduxStoreType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type PostDataPropsType = {
   store: ReduxStoreType


}

const Profile = (props: PostDataPropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}


            />
        </div>
    );
};

export default Profile;
