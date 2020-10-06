import React from "react";
import Links from "./Links"
import {connect} from "react-redux";
import {loginPageType, LogoutThunk} from "../../../redux/authReducer";
import {RootStateRedux} from "../../../redux/redux-store";


type mapStateToPropsType = {
    data: loginPageType
}
type mapDispatchToPropsType = {
    LogoutThunk:()=>void
}
type OwnPropsTypes = {}

type LinksTypeProps =
    mapStateToPropsType
    & mapDispatchToPropsType
    & OwnPropsTypes

class LinksContainer extends React.Component<LinksTypeProps, loginPageType> {


    render() {
        return <Links login={this.props.data.login} isAuth={this.props.data.isAuth} logout={this.props.LogoutThunk}/>;
    }
}

const mapStateToProps = (state: RootStateRedux) => {
    return {
        data: state.auth
    }
}


export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps, {LogoutThunk})(LinksContainer);