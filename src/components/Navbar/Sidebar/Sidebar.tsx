import React from "react";
import s from "./Sidebar.module.scss"
import {FriendDataType} from "../../../redux/store";

type FriendsDataTypeProps = {
   friendsData: Array<FriendDataType>
}
type FriendDataTypeProps = {
    id: number
    avatarLink: string
    name:string
}
const Friend = (props: FriendDataTypeProps) => {
    let friendName = props.name.split(" ",1).toString().slice(0, 6);
    return (

        <>
            <li key={props.id} className={s.friendsItem}>
                <a className={s.friendsItemLink} href="#">
                    <div className={s.friend}>
                        <img className={s.avatar}
                             src={props.avatarLink}
                             alt="ava"/>
                        <span className={s.label}>{friendName}</span>
                    </div>
                </a>
            </li>
        </>
    )
}
export const Friends = (props:FriendsDataTypeProps) => {
     let Friends = props.friendsData.map(friend =>
         <div key={friend.id}><Friend id={friend.id} avatarLink={friend.avatarLink} name={friend.name}/></div>)

    return (
        <div className={s.friendsBlock}>
            <h3 className={s.friendsTitle}>Friends</h3>
            <ul className={s.friendList}>
                {Friends}
            </ul>
        </div>
    );
}
