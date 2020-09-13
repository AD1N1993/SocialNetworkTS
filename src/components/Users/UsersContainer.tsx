import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {
    setCurrentPage,
    setTotalCountUsers,
    UserDataType,
    usersPageType,
    getUsersThunkCreator,
    unFollowThunkCreator,
    followThunkCreator
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/preloader";


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
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    unFollowThunkCreator: (userID:number)=>void
    followThunkCreator: (userID:number)=>void
}
type OwnPropsTypes = {}

type UsersTypeProps = mapStateToPropsType & mapDispatchToPropsType & OwnPropsTypes

class UsersContainer extends React.Component<UsersTypeProps, usersPageType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onChangePage = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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
        setCurrentPage,
        setTotalCountUsers,
        getUsersThunkCreator,
        followThunkCreator,
        unFollowThunkCreator
    })(UsersContainer)