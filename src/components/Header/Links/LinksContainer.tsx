import React from "react";
import Links from "./Links"
import {connect} from "react-redux";
import {checkLoginStateThunk, loginPageType} from "../../../redux/authReducer";
import {RootStateRedux} from "../../../redux/redux-store";


type mapStateToPropsType = {
    data: loginPageType
}
type mapDispatchToPropsType = {
    checkLoginStateThunk: () => void
}
type OwnPropsTypes = {}

type LinksTypeProps =
    mapStateToPropsType
    & mapDispatchToPropsType
    & OwnPropsTypes

class LinksContainer extends React.Component<LinksTypeProps, loginPageType> {
    componentDidMount() {
       this.props.checkLoginStateThunk();
    }

    render() {
        return <Links login={this.props.data.login} isAuth={this.props.data.isAuth}/>;
    }
}

const mapStateToProps = (state: RootStateRedux) => {
    return {
        data: state.auth
    }
}


export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps, {checkLoginStateThunk})(LinksContainer);