import React from "react";
import s from "./ProfileInfo.module.scss";
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../../common/preloader/preloader";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let nameContacts = Object.keys(props.profile.contacts);
    console.log(props.profile.contacts["facebook"])
    return (
        <div className={s.content}>
            <div className={s.profileCover}>
                <div className={s.userAvatar}><img src={props.profile.photos.large} alt="ava"/></div>
            </div>
            <div className={s.tools}>
                <div className={s.userName}>{props.profile.fullName}</div>
                <ul className={s.about}>
                    {nameContacts.map(n => {
                        console.log(n)
                        // @ts-ignore
                        return <li key={n}>{n}: {props.profile?.contacts[`${n}`]}</li>
                    })}
                </ul>
            </div>
            <div className="descr">{props.profile.aboutMe}</div>
        </div>
    );
};

export default ProfileInfo;
