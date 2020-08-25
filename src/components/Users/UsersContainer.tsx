import {

    mapDispatchToPropsType,

    mapStateToPropsType,
    OwnPropsTypes,
    Users
} from "./Users";
import {connect} from "react-redux";
import {RootStateRedux} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UserDataType} from "../../redux/usersReducer";


let mapStateToProps = (state: RootStateRedux) => {
    return {
        usersData: state.usersPage.usersData,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onFollow: (userID: number) => {
            dispatch(followAC(userID));
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID));
        },
        setUsers: (users: Array<UserDataType>) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps, mapDispatchToProps)(Users)