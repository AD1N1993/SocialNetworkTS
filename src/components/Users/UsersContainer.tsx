import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {
    followThunkCreator,
    requestUsersThunkCreator,
    setCurrentPage,
    setTotalCountUsers,
    unFollowThunkCreator,
    UserDataType,
    usersPageType
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers,
} from "../../redux/users-selectors";


type mapStateToPropsType = {
    usersData: Array<UserDataType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:Array<number>
}
type mapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    setTotalCountUsers: (totalCountUsers: number) => void
    requestUsersThunkCreator: (currentPage: number, pageSize: number) => void
    unFollowThunkCreator: (userID:number)=>void
    followThunkCreator: (userID:number)=>void
}
type OwnPropsTypes = {}

type UsersTypeProps = mapStateToPropsType & mapDispatchToPropsType & OwnPropsTypes

class UsersContainer extends React.Component<UsersTypeProps, usersPageType> {

    componentDidMount() {
        this.props.requestUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onChangePage = (pageNumber: number) => {
        this.props.requestUsersThunkCreator(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);

    }

    render() {
        let key = 12321321321321;
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users key={key}
                   totalCount={this.props.totalCount}
                   usersData={this.props.usersData}
                   currentPage={this.props.currentPage}
                   onChangePage={this.onChangePage}
                   pageSize={this.props.pageSize}
                   followingInProgress={this.props.followingInProgress}
                   followThunkCreator={this.props.followThunkCreator}
                   unFollowThunkCreator={this.props.unFollowThunkCreator}

            />
        </>
    }
}

/*let mapStateToProps = (state: RootStateRedux) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/
let mapStateToProps = (state: RootStateRedux) => {
    return {
        usersData: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage:getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps,
        {
            setCurrentPage,
            setTotalCountUsers,
            requestUsersThunkCreator,
            followThunkCreator,
            unFollowThunkCreator
        })
)(UsersContainer)