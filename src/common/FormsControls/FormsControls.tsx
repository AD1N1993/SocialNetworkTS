import React from "react";
import {WrappedFieldProps} from "redux-form";
import s from "./FormsControl.module.scss"

const FormControl: React.FC<WrappedFieldProps> = ({input, meta, children}) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
                {children}
            {
                hasError && <span className={s.spanError}>{meta.error}</span>
            }
        </>
    );
}

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    const hasError = meta.touched && meta.error;
    return <FormControl {...props}><textarea className={`${hasError ? s.error : ""}`} {...input}{...restProps}/></FormControl>
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    const hasError = meta.touched && meta.error;
    return <FormControl {...props}><input className={`${hasError ? s.error : ""}`} {...input}{...restProps}/></FormControl>
}