import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {RouteComponentProps} from "react-router";
import {
    getProfileThunk,
    getUserStatusThunk,
    ProfilePageType,
    ProfileType,
    updateUserStatusThunk
} from "../../redux/profileReducer";
import {RootStateRedux} from "../../redux/redux-store";
import {compose} from "redux";
import {Redirect} from "react-router-dom";

type PathParameterType = {
    userId: string
}
type mapStateToPropsType = {
    profile: ProfileType | null
    status:string
    userId: number | null
    isAuth:boolean
}

type mapDispatchToPropsType = {
    getProfileThunk:(userId:number)=> void
    getUserStatusThunk:(userId:number)=> void
    updateUserStatusThunk: (status:string)=>void
}
type OwnPropsTypes = {}

type ProfileTypeProps =
    mapStateToPropsType
    & mapDispatchToPropsType
    & OwnPropsTypes
    & RouteComponentProps<PathParameterType>

class ProfileContainer extends React.Component<ProfileTypeProps, ProfilePageType> {

    componentDidMount() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) userId = this.props.userId
        if (typeof userId === "number") {
            this.props.getProfileThunk(userId);
            this.props.getUserStatusThunk(userId);
        }
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateUserStatusThunk={this.props.updateUserStatusThunk}/>
        );
    };
}

let mapStateToProps = (state: RootStateRedux): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps, {getProfileThunk, getUserStatusThunk,updateUserStatusThunk}),
    withRouter,
)(ProfileContainer)
