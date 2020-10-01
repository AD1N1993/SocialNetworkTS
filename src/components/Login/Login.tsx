import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {LoginThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {RootStateRedux} from "../../redux/redux-store";
import s from "../../common/FormsControls/FormsControl.module.scss"

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit} action="#">
                <label htmlFor="login">
                    <Field type="text"
                           placeholder={"Login"}
                           name={"login"} id={"login"}
                           component={Input}
                           validate={[required]}
                    />
                </label>
                <label htmlFor="password">
                    <Field type="password"
                           placeholder={"Password"}
                           name={"password"} id={"password"}
                           component={Input}
                           validate={[required]}
                    />
                </label>
                <label htmlFor="checkbox">
                    <Field type="checkbox"
                           placeholder={"Login"}
                           name={"rememberMe"} id={"checkbox"}
                           component={Input}
                    />
                    remember me
                </label>
                <div className={s.formSummaryError}>{props.error ? props.error :""}</div>
                <button>Login</button>
            </form>
        </>
    );
}

const ReduxLoginForm = reduxForm<FormDataType>({form: "login"})(LoginForm);

type mapDispatchToPropsType = {
    LoginThunk:(email:string,password:string,rememberMe:boolean)=>void
}
type mapStateToPropsType = {
    isAuth: boolean
}
type OwnPropsType= {}
type LoginPropsType = mapDispatchToPropsType&mapStateToPropsType&OwnPropsType

export const Login = (props:LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
       props.LoginThunk(formData.login,formData.password, formData.rememberMe)
    }
    if(props.isAuth) return <Redirect to={"/profile"}/>
    return (
        <>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </>
    );
}
const mapStateToProps = (state: RootStateRedux) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export const LoginContainer = connect<mapStateToPropsType,mapDispatchToPropsType,OwnPropsType,RootStateRedux>(mapStateToProps,{LoginThunk})(Login);
