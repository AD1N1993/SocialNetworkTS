import s from "./Users.module.scss";
import {UserDataType} from "../../redux/usersReducer";
import userPhoto from "../../assets/img/userLogo.png";
import React from "react";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    usersData: Array<UserDataType>
    onChangePage: (pageNumber: number) => void
    unFollowThunkCreator: (userID: number) => void
    followThunkCreator: (userID: number) => void

}


export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <>
            <div>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? s.selectedPage : ""}
                                 onClick={() => {
                                     props.onChangePage(p)
                                 }}
                    >{p}</span>
                })}

            </div>
            {props.usersData.map((user: UserDataType) =>
                <div key={user.id} className={s.userWrapper}>
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
                                          disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.unFollowThunkCreator(user.id)

                                          }
                                          }>
                                    UnFollow
                                </button>
                                : <button className={s.btn}
                                          disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.followThunkCreator(user.id)
                                          }}>
                                    Follow
                                </button>
                        }
                    </div>
                    <div className={"rightPart"}>
                        {/*<div>{user.location.country}</div>*/}
                        {/*<div>{user.location.city}</div>*/}
                    </div>
                </div>)
            }
        </>
    );
}