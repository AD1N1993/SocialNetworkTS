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
import {DialogsDataType, MessagesDataType, PostDataType} from "./redux/state";


type AppPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    postData: Array<PostDataType>
}

const App = (props:AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Route path={'/profile'}
                           render={() =>
                               <Profile postData={props.postData}/>
                    }/>
                    <Route path={'/dialogs'}
                           render={() =>
                                <Dialogs dialogsData={props.dialogsData}
                                         messagesData={props.messagesData}
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