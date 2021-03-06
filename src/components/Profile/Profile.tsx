import React from "react";
import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatusThunk: (status: string) => void
    owner:boolean
    updateProfilePhoto: (photo: Blob)=> void
}

const Profile = (props: ProfilePropsType) => {
    console.log("rednder")
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatusThunk={props.updateUserStatusThunk}
                         updateProfilePhoto={props.updateProfilePhoto}
                         owner={props.owner}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
