import React from "react";
import s from "./ProfileInfo.module.scss";
import {ContactType, ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../../common/preloader/preloader";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let nameContacts = Object.keys(props.profile.contacts);
    return (
        <div className={s.content}>
            <div className={s.profileCover}>
                <div className={s.userAvatar}><img src={props.profile.photos.large} alt="ava"/></div>
            </div>
            <div className={s.tools}>
                <div className={s.userName}>{props.profile.fullName}</div>
                <ul className={s.about}>
                    {nameContacts.map((n:string) => {

                        return <li key={n}>{n}: {props.profile?.contacts[n as keyof ContactType]}</li>
                    })}
                </ul>
            </div>
            <div className="descr">{props.profile.aboutMe}</div>
        </div>
    );
};

export default ProfileInfo;
