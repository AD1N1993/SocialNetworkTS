import React from "react";
import s from "./ProfileInfo.module.scss";


const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div className={s.profileCover}>
                <div className={s.userAvatar}> </div>
            </div>
            <div className={s.tools}>
                <div className={s.userName}>Yury Yury</div>
            </div>
            <div className="descr">description</div>
            
            

        </div>
    );
};

export default ProfileInfo;
