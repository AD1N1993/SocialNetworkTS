import "react";
import React from "react";
import "./App.scss";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Nav";
import {Dialogs} from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {ActionsTypes, AddPostType, OnChangeTextArea, RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friendsData={props.state.sideBarFriend.friendsData}/>
                <div className={"content"}>
                    <Route path={'/profile'}
                           render={() =>
                               <Profile
                                   postData={props.state.profilePage.postData}

                                   newPostText={props.state.profilePage.newPostText}

                                   dispatch={props.dispatch}
                               />
                           }/>
                    <Route path={'/dialogs'}
                           render={() =>
                               <Dialogs dialogsData={props.state.messagesPage.dialogsData}
                                        messagesData={props.state.messagesPage.messagesData}
                               />

                           }/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

