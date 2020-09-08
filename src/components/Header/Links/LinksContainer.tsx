import React from "react";
import Links from "./Links"
import axios from "axios";
import {connect} from "react-redux";
import {loginPageType, setUsersDataAC} from "../../../redux/authReducer";
import {RootStateRedux} from "../../../redux/redux-store";


type mapStateToPropsType = {
    data: loginPageType
}
type mapDispatchToPropsType = {
    setUsersDataAC: (data: loginPageType) => void
}
type OwnPropsTypes = {}

type LinksTypeProps =
    mapStateToPropsType
    & mapDispatchToPropsType
    & OwnPropsTypes

class LinksContainer extends React.Component<LinksTypeProps, loginPageType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0) {

                this.props.setUsersDataAC(response.data.data);
            }

        })

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


export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps, {setUsersDataAC})(LinksContainer);