import React from "react";
import * as ReactDom from 'react-dom'
import { useFormik } from "formik";
import * as Yup from 'yup'
import {Button} from "@mui/material"
import {Clear} from "@mui/icons-material"



const Login = ({isOpen, onClose}) =>{
    if(!isOpen) return null;
    
    const formik = useFormik({
        initialValues:{
            username:"",
            password:""
        },
        validationSchema:Yup.object({
            username:Yup.string()
            .required("Username is required"),
            password:Yup.string()
            .required("Password is required")
        }),
        onSubmit: values =>{
            console.log(values)
        }
    })
    return ReactDom.createPortal(
        <>
            <div className="dashLogin">
                
                <form onSubmit={formik.handleSubmit}>
                <Clear onClick = {onClose} id="closeLogin"/>
                <h2>Login</h2>
                    <div className="field">
                        <label htmlFor="username">username</label>
                        <input type = "text"
                        name="username"
                        id = "username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.username && formik.errors.username ?
                        <p>{formik.errors.username}</p> :
                        null}
                    </div>
                    <div className="field">
                        <label htmlFor="password">password</label>
                        <input type = "password"
                        name="password"
                        id = "password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ?
                        <p>{formik.errors.password}</p> :
                        null}
                    </div>
                    <Button variant="contained" onClick = {formik.submitForm}>Login</Button>
                </form>
            </div>
        </>, document.getElementById('modalRoot')
    )
}

export default Login