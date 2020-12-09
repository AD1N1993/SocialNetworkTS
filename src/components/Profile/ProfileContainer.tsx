import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {
    getProfileThunk,
    getUserStatusThunk,
    ProfilePageType,
    ProfileType,
    updateUserPhotoThunk,
    updateUserStatusThunk
} from "../../redux/profileReducer";
import {RootStateRedux} from "../../redux/redux-store";
import {compose} from "redux";

type PathParameterType = {
    userId: string
}
type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
    userId: number | null
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getProfileThunk: (userId: number) => void
    getUserStatusThunk: (userId: number) => void
    updateUserStatusThunk: (status: string) => void
    updateUserPhotoThunk:  (photo: Blob)=> void
}
type OwnPropsTypes = {}

type ProfileTypeProps =
    mapStateToPropsType
    & mapDispatchToPropsType
    & OwnPropsTypes
    & RouteComponentProps<PathParameterType>

class ProfileContainer extends React.Component<ProfileTypeProps, ProfilePageType> {
    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;

        }
        if (!userId) this.props.history.push("/login")

        if (typeof userId === "number") {
            this.props.getProfileThunk(userId);
            this.props.getUserStatusThunk(userId);
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<ProfileTypeProps>, prevState: Readonly<ProfilePageType>, snapshot?: any) {
        if(this.props.match.params.userId != prevProps.match.params.userId)
        this.refreshProfile();
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status}
                     updateUserStatusThunk={this.props.updateUserStatusThunk}
                     updateProfilePhoto={this.props.updateUserPhotoThunk}
                     owner={!!this.props.match.params.userId}/>
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
    connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps, {
        getProfileThunk,
        getUserStatusThunk,
        updateUserStatusThunk,
        updateUserPhotoThunk,
    }),
    withRouter,
)(ProfileContainer)
