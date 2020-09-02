import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, ProfileType, setUserProfileAC} from "../../redux/profileReducer";
import {RootStateRedux} from "../../redux/redux-store";


type mapStateToPropsType = {
    profile: ProfileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type OwnPropsTypes = {}

type ProfileTypeProps = mapStateToPropsType & mapDispatchToPropsType & OwnPropsTypes


class ProfileContainer extends React.Component<ProfileTypeProps, ProfilePageType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2")
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
export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps, {setUserProfile: setUserProfileAC})(ProfileContainer);
