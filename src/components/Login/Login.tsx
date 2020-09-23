import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {connect} from "react-redux";
import {LoginStateThunk} from "../../redux/authReducer";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
type LoginFormPropsType = {
    loginUser: (email:string,password:string,rememberMe:boolean)=>void
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit} action="#">
                <label htmlFor="login">
                    <Field type="text" placeholder={"Login"} name={"login"} id={"login"} component={"input"}/>
                </label>
                <label htmlFor="password">
                    <Field type="password" placeholder={"Password"} name={"password"} id={"password"}
                           component={"input"}/>
                </label>
                <label htmlFor="checkbox">
                    <Field type="checkbox" placeholder={"Login"} name={"rememberMe"} id={"checkbox"}
                           component={"input"}/>
                    remember me
                </label>
                <button>Login</button>

            </form>
        </>
    );
}
const ReduxLoginForm = reduxForm<FormDataType>({form: "login"})(LoginForm);


export const Login = () => {
    const onSubmit = (formData: FormDataType) => {

    }
    return (
        <>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </>
    );
}
