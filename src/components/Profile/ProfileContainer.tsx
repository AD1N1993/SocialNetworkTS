import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {RouteComponentProps} from "react-router";
import {ProfilePageType, ProfileType, setUserProfileAC} from "../../redux/profileReducer";
import {RootStateRedux} from "../../redux/redux-store";

type PathParameterType = {
    userId: string
}
type mapStateToPropsType = {
    profile: ProfileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type OwnPropsTypes = {}

type ProfileTypeProps =
    mapStateToPropsType
    & mapDispatchToPropsType
    & OwnPropsTypes
    & RouteComponentProps<PathParameterType>


class ProfileContainer extends React.Component<ProfileTypeProps, ProfilePageType> {

    componentDidMount() {
        debugger

        let userId = this.props.match.params.userId;
        if (!userId) userId = "2"
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)

            });
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    };
}

let mapStateToProps = (state: RootStateRedux): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps, {setUserProfile: setUserProfileAC})(WithUrlDataContainerComponent);
