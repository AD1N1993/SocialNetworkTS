import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/profileReducer";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../../common/FormsControls/FormsControls";


export type MapStateToPropsTypes = {
    postData: Array<PostDataType>
}

export type MapDispatchToPropsTypes = {
    addPostOnClick: (postBody:string) => void

}

export type OwnPropsTypes = {

}

type PostDataTypePropsType = MapStateToPropsTypes & MapDispatchToPropsTypes & OwnPropsTypes


const MyPosts = (props: PostDataTypePropsType) => {
    let posts = props.postData.map(p => <div key={p.id}><Post message={p.post} likes={p.likes} id={p.id}/></div>)

    const onSubmit = (formData: PostFormType) => {
        props.addPostOnClick(formData.post);
        console.log(formData.post)
    }

    return (

        <div className={s.posts}>
            <h2 className={s.title}>My posts</h2>
            {posts}
           <ReduxPostForm onSubmit={onSubmit}/>
        </div>
    );
};
type PostFormType = {
    post: string
}
const maxLength = maxLengthCreator(10);
const PostForm:React.FC<InjectedFormProps<PostFormType>> = (props) => {
    return(
        <>
            <form action="#" onSubmit={props.handleSubmit}>
                <Field  placeholder={"post"}
                        name={"post"} id={"post"}
                        component={TextArea}
                        validate={[required,maxLength]}
                />
                <button>AddPost</button>
            </form>
        </>
    );
}
const ReduxPostForm = reduxForm<PostFormType>({form: "post"})(PostForm)

export default MyPosts;
