import React from "react";
import "./App.scss";
import {Route, withRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Nav";
import {Dialogs} from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {LoginContainer} from "./components/Login/Login";
import {connect} from "react-redux";
import {RootStateRedux} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./common/preloader/preloader";


class App extends React.Component<AppTypeProps> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized)return <Preloader/>
        return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Route path={'/profile/:userId?'}
                           render={() =>
                               <ProfileContainer/>
                           }/>
                    <Route path={'/dialogs'}
                           render={() =>
                               <Dialogs/>
                           }/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <LoginContainer/>}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: RootStateRedux) => {
    return {initialized: state.initialized.initialized}
}
export default compose<React.ComponentType>(
    withRouter,
    connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsTypes, RootStateRedux>(mapStateToProps, {initializeApp})
)(App);


type mapDispatchToPropsType = {
    initializeApp: () => void
}
type  mapStateToPropsType = {initialized:boolean}
type OwnPropsTypes = {}
type AppTypeProps = mapDispatchToPropsType & OwnPropsTypes & mapStateToPropsType
