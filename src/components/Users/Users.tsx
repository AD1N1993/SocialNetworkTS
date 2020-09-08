import s from "./Users.module.scss";
import {UserDataType} from "../../redux/usersReducer";
import userPhoto from "../../assets/img/userLogo.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";


type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    usersData: Array<UserDataType>
    onChangePage: (pageNumber: number) => void
    onFollow: (userID: number) => void
    unFollow: (userID: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void

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
                                              props.toggleFollowingProgress(true, user.id);
                                              usersAPI.unFollow(user.id).then(resultCode => {
                                                  if (resultCode === 0) {
                                                      props.unFollow(user.id);
                                                  }
                                                  props.toggleFollowingProgress(false, user.id);
                                              });

                                          }
                                          }>
                                    UnFollow
                                </button>
                                : <button className={s.btn}
                                          disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.toggleFollowingProgress(true, user.id);
                                              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                  withCredentials: true,
                                                  headers: {
                                                      "API-KEY": "2c4c11b3-b7ca-4a85-9ffe-5b500c4db141"
                                                  }
                                              }).then(response => {
                                                  if (response.data.resultCode === 0) {
                                                      props.onFollow(user.id);
                                                  }
                                                  props.toggleFollowingProgress(false, user.id);
                                              });
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