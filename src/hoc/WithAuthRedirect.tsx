import React from "react";
import {Redirect} from "react-router-dom";
import {RootStateRedux} from "../redux/redux-store";
import {connect} from "react-redux";

type RedirectComponentTypeProps ={
    isAuth:boolean
}
export const withAuthRedirect = (Component: React.ComponentType) => {
    class RedirectComponent extends React.Component<RedirectComponentTypeProps, RootStateRedux> {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }

    }
    let mapStateToPropsForRedirect = (state: RootStateRedux) =>({
        isAuth: state.auth.isAuth
    })
    return connect(mapStateToPropsForRedirect) (RedirectComponent);
}