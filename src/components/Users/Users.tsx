import {UserDataType} from "../../redux/usersReducer";
import React from "react";
import {User} from "./User";
import {Paginator} from "../../common/Paginator/Paginator";

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
            <Paginator totalItemsCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage} portionSize={7} onChangePage={props.onChangePage}/>
            {props.usersData.map((user: UserDataType) => <User key = {user.id}
                                                               user={user}
                                                               unFollowThunkCreator={props.unFollowThunkCreator}
                                                               followThunkCreator={props.followThunkCreator}
                                                               followingInProgress={props.followingInProgress}
            />)}

        </>
    );
}