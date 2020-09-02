import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/profileReducer";


export type MapStateToPropsTypes = {
    postData: Array<PostDataType>
    newPostText: string
}

export type MapDispatchToPropsTypes = {
    onChangeTextArea: (textPost: string) => void
    addPostOnClick: () => void

}

export type OwnPropsTypes = {

}

type PostDataTypePropsType = MapStateToPropsTypes & MapDispatchToPropsTypes & OwnPropsTypes



const MyPosts = (props: PostDataTypePropsType) => {

    let posts = props.postData.map(p => <div key={p.id}><Post message={p.post} likes={p.likes} id={p.id}/></div>)
    const addPostOnClick = () => {
        props.addPostOnClick();
    }

    const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textPost = e.currentTarget.value;
        props.onChangeTextArea(textPost);
    }

    return (
        <div className={s.posts}>
            <h2 className={s.title}>My posts</h2>
            <textarea className={s.tA} value={props.newPostText} onChange={onChangeTextArea}/>
            <button onClick={addPostOnClick}>AddPost</button>
            <button>Delete</button>
            {posts}
        </div>
    );
};

export default MyPosts;
