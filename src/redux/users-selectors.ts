import {RootStateRedux} from "./redux-store";
import {createSelector} from "reselect";
import {UserDataType} from "./usersReducer";

export const getUsers = (state:RootStateRedux) =>{
    return state.usersPage.usersData
}

export const getPageSize = (state:RootStateRedux) =>{
    return state.usersPage.pageSize
}
export const getTotalCount = (state:RootStateRedux) =>{
    return  state.usersPage.totalCount
}
export const getCurrentPage = (state:RootStateRedux) =>{
    return  state.usersPage.currentPage
}
export const getIsFetching = (state:RootStateRedux) =>{
    return  state.usersPage.isFetching
}
export const getFollowingInProgress = (state:RootStateRedux) =>{
    return  state.usersPage.followingInProgress
}
// export const getUsersSuper = createSelector(getUsers,getIsFetching,(users:Array<UserDataType>, isFetching)=>{
//     return users.filter(u=>true)
// })
