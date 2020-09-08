import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {
    onFollow,
    setCurrentPage, toggleFollowingProgress, setToggleIsFetching,
    setTotalCountUsers,
    setUsers,
    unFollow,
    UserDataType, usersPageType
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/preloader";
import {usersAPI} from "../../api/api";


type mapStateToPropsType = {
    usersData: Array<UserDataType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:Array<number>
}
type mapDispatchToPropsType = {
    onFollow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserDataType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCountUsers: (totalCountUsers: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}
type OwnPropsTypes = {}

type UsersTypeProps = mapStateToPropsType & mapDispatchToPropsType & OwnPropsTypes

class UsersContainer extends React.Component<UsersTypeProps, usersPageType> {

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setToggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalCountUsers(data.totalCount);
        });
    }

    onChangePage = (pageNumber: number) => {
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setToggleIsFetching(false);
        });
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
                   onFollow={this.props.onFollow}
                   pageSize={this.props.pageSize}
                   unFollow={this.props.unFollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state: RootStateRedux) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps,
    {
        onFollow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalCountUsers,
        setToggleIsFetching,
        toggleFollowingProgress
    })(UsersContainer)