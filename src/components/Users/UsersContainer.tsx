import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {
    onFollow,
    setCurrentPage, setToggleIsFetching,
    setTotalCountUsers,
    setUsers,
    unFollow,
    UserDataType, usersPageType
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/preloader";


type mapStateToPropsType = {
    usersData: Array<UserDataType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    onFollow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserDataType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCountUsers: (totalCountUsers: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
}
type OwnPropsTypes = {}

type UsersTypeProps = mapStateToPropsType & mapDispatchToPropsType & OwnPropsTypes

class UsersContainer extends React.Component<UsersTypeProps,usersPageType> {

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCountUsers(response.data.totalCount);
            });
    }

    onChangePage = (pageNumber: number) => {
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
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
        isFetching: state.usersPage.isFetching
    }
}
/*let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onFollow: (userID: number) => {
            dispatch(onFollowAC(userID));
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID));
        },
        setUsers: (users: Array<UserDataType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalCount: (totalCountUsers: number) => {
            dispatch(setTotalCountUsersAC(totalCountUsers));
        },
        setIsFetching:(isFetching:boolean)=> {
            dispatch(setToggleIsFetchingAC(isFetching));
        }
    }
}*/


export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps,
    {
        onFollow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalCountUsers,
        setToggleIsFetching
    })(UsersContainer)