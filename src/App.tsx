import "react";
import React from "react";
import "./App.scss";
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Nav";
import {Dialogs} from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {ReduxStoreType} from "./redux/store";
import store from "./redux/redux-store";

type AppPropsType = {
    store: ReduxStoreType
}

const App = (props: AppPropsType) => {
    let state = store.getState();

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friendsData={state.sideBarFriend.friendsData}/>
            <div className={"content"}>
                <Route path={'/profile'}
                       render={() =>
                           <Profile />
                       }/>
                <Route path={'/dialogs'}
                       render={() =>
                           <Dialogs store={props.store}/>
                       }/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
            </div>
        </div>

    );
};

export default App;

