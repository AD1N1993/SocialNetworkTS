import React, {ChangeEvent, useState} from "react";
import s from "./ProfileInfo.module.scss";
import {ContactType, ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userLogo from "../../../assets/img/preloader.gif"
import ProfileDataForm from "./ProfileDataForm";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatusThunk: (status: string) => void
    owner: boolean
    updateProfilePhoto: (photo: Blob) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState(false);
    const activateMode = () => {
        setEditMode(true);
    }
    const deactivateMode = () => {
        setEditMode(false);

    }
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainFotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e?.target.files?.length !== undefined) {
            props.updateProfilePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData: ProfileType) => {
       console.log(formData)
    }
    return (
        <div className={s.content}>
            <div className={s.profileCover}>
                <div className={s.userAvatar}>
                    <img src={props.profile.photos.large || userLogo} alt="ava"/>
                    {
                        !props.owner && <input type="file" onChange={(e) => onMainFotoSelected(e)}/>
                    }
                </div>
            </div>
            <div className={s.tools}>

                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} isOwner={props.owner}/>
                    : <ProfileData profile={props.profile} isOwner={props.owner} activateMode={activateMode}/>
                }
            </div>
            <ProfileStatusWithHooks status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
        </div>
    );
};

const ProfileData = (props: ProfileDataProps) => {
    let {profile} = props;


    if (profile) {
        return (<>
            {!props.isOwner && <button onClick={props.activateMode}>set</button>}
            <div className={s.userName}>{profile.fullName}</div>
            <ul className={s.about}>
                {Object.keys(profile.contacts).map((n: string) => {
                    return <li key={n}>{n}: {props.profile?.contacts[n as keyof ContactType]}</li>
                })}
                <li>{!profile.aboutMe ? "Will Be Create" : profile.aboutMe}</li>
                <li>{profile.lookingForAJob ? "Yes" : "No"}</li>
                <li>{!profile.lookingForAJobDescription ? "Will Be Create" : profile.lookingForAJobDescription}</li>
            </ul>
        </>)
    } else {
        return <span>oops</span>
    }
}
export type ProfileDataProps = {
    profile: ProfileType | null
    isOwner?:boolean
    activateMode?: ()=>void
    deactivateMode?:()=>void
}
export default ProfileInfo;
