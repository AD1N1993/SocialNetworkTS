import "react";
import React from "react";
import "./App.scss";
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Nav";
import {Dialogs} from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar />
            <div className={"content"}>
                <Route path={'/profile'}
                       render={() =>
                           <ProfileContainer />
                       }/>
                <Route path={'/dialogs'}
                       render={() =>
                           <Dialogs />
                       }/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/users'} render={() => <UsersContainer />}/>
            </div>
        </div>

    );
};

export default App;

