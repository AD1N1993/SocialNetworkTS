import {UserDataType} from "../../redux/usersReducer";
import React from "react";
import {Paginator} from "../../common/Paginator/Paginator";
import {User} from "./User";

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
    return (
        <>
            <Paginator totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage} onChangePage={props.onChangePage}/>
            {props.usersData.map((user: UserDataType) => <User key = {user.id}
                                                               user={user}
                                                               unFollowThunkCreator={props.unFollowThunkCreator}
                                                               followThunkCreator={props.followThunkCreator}
                                                               followingInProgress={props.followingInProgress}
            />)}

        </>
    );
}