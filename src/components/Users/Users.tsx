import React from "react";
import {UserDataType} from "../../redux/usersReducer";
import s from "./Users.module.scss"

export type mapStateToPropsType = {
    usersData: Array<UserDataType>
}
export type mapDispatchToPropsType = {
    onFollow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserDataType>) => void
}
export type OwnPropsTypes = {}


type UsersTypeProps = mapStateToPropsType & mapDispatchToPropsType & OwnPropsTypes


export const Users = (props: UsersTypeProps) => {
    if(props.usersData.length === 0)  props.setUsers([
        {
            id: 1,
            followed: false,
            firstName: "Dmytri",
            status: "I am a Boss",
            avatar:"https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png",
            location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: 2,
            followed: true,
            firstName: "Alex",
            status: "I am a SuperBoss",
            avatar:"https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png",
            location: {country: "Russia", city: "Moscow"}
        },
        {
            id: 3,
            followed: false,
            firstName: "Kat",
            status: "I am a PrimaryBoss",
            avatar:"https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png",
            location: {country: "Ukraine", city: "Kiev"}
        },
    ])
    return (
        <>
            {props.usersData.map((user) =>
                <div key={user.id} className={s.userWrapper}>
                    <div className={s.leftPart}>
                        <a className={s.avatarLink} href="#">
                            <img className={s.avatar}
                                 src={user.avatar}
                                 alt="user"/>
                        </a>
                        <div className={`${s.name} ${s.label}`}>{user.firstName}</div>
                        <div className={`${s.status} ${s.label}`}>{user.status}</div>
                        {
                            user.followed
                                ? <button className={s.btn}
                                          onClick={()=>props.unFollow(user.id)}>
                                    Follow
                                </button>
                                : <button className={s.btn}
                                          onClick={()=>props.onFollow(user.id)}>
                                    Unfollow
                                </button>
                        }
                    </div>
                    <div className={"rightPart"}>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </div>
                </div>)
            }
        </>
    );
}