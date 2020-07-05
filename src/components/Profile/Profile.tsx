import React from "react";
import s from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.profileCover}>
                <div className={s.userAvatar}> </div>
            </div>
            <div className={s.tools}>
                <div className={s.userName}>Yury Yury</div>
            </div>
            <div className="descr">description</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
