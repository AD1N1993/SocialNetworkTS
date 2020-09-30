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

type PathParameterType = {
    userId: string
}
type mapStateToPropsType = {
    profile: ProfileType | null
    status:string
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
        let userId = this.props.match.params.userId;
        if (!userId) userId = "6731"
        this.props.getProfileThunk(+userId);
        this.props.getUserStatusThunk(+userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateUserStatusThunk={this.props.updateUserStatusThunk}/>
        );
    };
}

let mapStateToProps = (state: RootStateRedux): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps, {getProfileThunk, getUserStatusThunk,updateUserStatusThunk}),
    withRouter,
)(ProfileContainer)
