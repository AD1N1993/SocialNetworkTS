import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (

        <StoreContext.Consumer>{
            (store) => {

                let state = store.getState();

                const addPostOnClick = () => {
                    store.dispatch(addPostActionCreator());
                }

                const onChangeTextArea = (textPost: string) => {
                    let action = updatePostTextActionCreator(textPost)
                    store.dispatch(action);
                }
                return <MyPosts onChangeTextArea={onChangeTextArea}
                                addPostOnClick={addPostOnClick}
                                postData={state.profilePage.postData}
                                newPostText={state.profilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;
