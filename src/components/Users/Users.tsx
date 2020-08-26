import React from "react";
import {UserDataType} from "../../redux/usersReducer";
import s from "./Users.module.scss"
import axios from "axios"
import userPhoto from "../../assets/img/userLogo.png"

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


class Users extends React.Component<UsersTypeProps> {

componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            this.props.setUsers(response.data.items);
        });
}

    render() {
        return (
            <>
                {this.props.usersData.map((user: any) =>
                    <div key={user.id} className={s.userWrapper}>
                        <div className={s.leftPart}>
                            <a className={s.avatarLink} href="#">
                                <img className={s.avatar}
                                     src={user.photos.small !== null ? user.photos.small : userPhoto}
                                     alt="user"
                                />
                            </a>
                            <div className={`${s.name} ${s.label}`}>{user.name}</div>
                            <div className={`${s.status} ${s.label}`}>{user.status}</div>
                            {
                                user.followed
                                    ? <button className={s.btn}
                                              onClick={() => this.props.unFollow(user.id)}>
                                        Follow
                                    </button>
                                    : <button className={s.btn}
                                              onClick={() => this.props.onFollow(user.id)}>
                                        Unfollow
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
}

export default Users