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
import {Users} from "./Users";


type mapStateToPropsType = {
    usersData: Array<UserDataType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type mapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    setTotalCountUsers: (totalCountUsers: number) => void
    requestUsersThunkCreator: (currentPage: number, pageSize: number) => void
    unFollowThunkCreator: (userID: number) => void
    followThunkCreator: (userID: number) => void
}
type OwnPropsTypes = {}

type UsersTypeProps = mapStateToPropsType & mapDispatchToPropsType & OwnPropsTypes

class UsersContainer extends React.Component<UsersTypeProps, usersPageType> {

    componentDidMount() {
        const {requestUsersThunkCreator, currentPage, pageSize} = this.props
        requestUsersThunkCreator(currentPage, pageSize);
    }

    onChangePage = (pageNumber: number) => {
        const {requestUsersThunkCreator, pageSize, setCurrentPage} = this.props;
        requestUsersThunkCreator(pageNumber, pageSize);
        setCurrentPage(pageNumber);

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

let mapStateToProps = (state: RootStateRedux) => {
    return {
        usersData: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
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