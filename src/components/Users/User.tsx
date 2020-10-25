import s from "./Users.module.scss";
import {UserDataType} from "../../redux/usersReducer";
import userPhoto from "../../assets/img/userLogo.png";
import React from "react";
import {NavLink} from "react-router-dom";


type UserPropsType = {
    user:UserDataType
    unFollowThunkCreator: (userID: number) => void
    followThunkCreator: (userID: number) => void
    followingInProgress: Array<number>
}


export const User = ({user,unFollowThunkCreator,followThunkCreator,followingInProgress}: UserPropsType) => {

    return (
        <>

                <div  className={s.userWrapper}>
                    <div className={s.leftPart}>
                        <a className={s.avatarLink} href="#">
                            <NavLink to={"/profile/" + user.id}>
                                <img className={s.avatar}
                                     src={user.photos.small !== null ? user.photos.small : userPhoto}
                                     alt="user"
                                />
                            </NavLink>
                        </a>
                        <div className={`${s.name} ${s.label}`}>{user.name}</div>
                        <div className={`${s.status} ${s.label}`}>{user.status}</div>
                        {
                            user.followed
                                ? <button className={s.btn}
                                          disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unFollowThunkCreator(user.id)

                                          }
                                          }>
                                    UnFollow
                                </button>
                                : <button className={s.btn}
                                          disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              followThunkCreator(user.id)
                                          }}>
                                    Follow
                                </button>
                        }
                    </div>
                    <div className={"rightPart"}>
                        {/*<div>{user.location.country}</div>*/}
                        {/*<div>{user.location.city}</div>*/}
                    </div>
                </div>
        </>
    );
}