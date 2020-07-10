import React from "react";
import s from "./Post.module.scss";

type PostPropsType = {
    message: string,
	likes: number
    id: number
}

const Post = (props:PostPropsType) => {
  return (
	<div>
	  <div className={s.post}>
		<img
		  src="https://icdn.lenta.ru/images/2020/01/28/17/20200128170822958/square_1280_afbb21cfff8d776afb23c0d8d2a96a7c.jpg"
		  alt="avatar"
		/>
		{props.message}
	  </div>
	  <div className="like">{props.likes} like</div>
	</div>
  );
};

export default Post;
