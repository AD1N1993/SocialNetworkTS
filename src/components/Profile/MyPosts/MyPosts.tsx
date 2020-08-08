import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/store";

type PostDataTypePropsType = {
    postData: Array<PostDataType>
    newPostText: string
    onChangeTextArea: (textPost: string) => void
    addPostOnClick: () => void
}

const MyPosts = (props: PostDataTypePropsType) => {

    let posts = props.postData.map(p => <Post message={p.post} likes={p.likes} id={p.id}/>)
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
