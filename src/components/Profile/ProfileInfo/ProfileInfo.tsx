import React from "react";
import s from "./ProfileInfo.module.scss";
import {ContactType, ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatusThunk: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let nameContacts = Object.keys(props.profile.contacts);

    console.log("rednder")
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
            <ProfileStatusWithHooks status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
        </div>
    );
};

export default ProfileInfo;
