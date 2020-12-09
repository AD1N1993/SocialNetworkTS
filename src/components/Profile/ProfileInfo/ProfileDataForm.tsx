import * as React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {ProfileType, ContactType} from "../../../redux/profileReducer";
import s from "./ProfileInfo.module.scss";
import {Input} from "../../../common/FormsControls/FormsControls";


type PropsType = {
    profile: ProfileType
    isOwner: boolean
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, isOwner}) => {
    if (profile) {
        return (
            <form onSubmit={handleSubmit}>
                {!isOwner && <button type={"submit"}>save</button>}
                <div className={s.userName}>{profile.fullName}:
                    <div>
                        <Field name="fullName" component={Input}/></div>
                </div>
                <ul className={s.about}>
                    {Object.keys(profile.contacts).map((n: string) => {
                        return <li key={n}>{n}: {profile?.contacts[n as keyof ContactType]}
                            <Field
                                name={"contacts." + n}
                                component={Input}
                            />
                        </li>
                    })}
                    <li> lookingForAJobDescription:<Field name="lookingForAJobDescription" component={Input}/></li>
                </ul>
            </form>)
    } else {
        return <span>oops</span>
    }

}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm

