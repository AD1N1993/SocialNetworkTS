import {RootStateRedux} from "./redux-store";

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