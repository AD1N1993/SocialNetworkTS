import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {RouteComponentProps} from "react-router";
import {getProfileThunk, ProfilePageType, ProfileType} from "../../redux/profileReducer";
import {RootStateRedux} from "../../redux/redux-store";

type PathParameterType = {
    userId: string
}
type mapStateToPropsType = {
    profile: ProfileType | null
}
type mapDispatchToPropsType = {
    getProfileThunk:(userId:number)=> void
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
        if (!userId) userId = "2"
       this.props.getProfileThunk(+userId);
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

export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps, {getProfileThunk})(WithUrlDataContainerComponent);
