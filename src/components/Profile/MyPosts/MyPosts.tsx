import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/state";




type PostDataTypePropsType = {
    postData: Array<PostDataType>
}

const MyPosts = (props:PostDataTypePropsType) => {

    let posts = props.postData.map(p => <Post message={p.post} likes={p.likes} id = {p.id}/>)

  return (
	<div className={s.posts}>
	  <h2 className={s.title}>My posts</h2>
        <textarea className={s.tA} name="textarea" id="textarea"> </textarea>
	  <button>Send</button>
	  <button>Delete</button>
        { posts }
	</div>
  );
};

export default MyPosts;
