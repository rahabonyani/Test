import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import BaseInput from "../../components/baseInput";
import { LayoutForm, FormLogin, LinkRouter } from "../design";
import Typography from "@material-ui/core/Typography";
import BaseButton from "../../components/baseButton";
import { Link, useHistory } from "react-router-dom";
import { requestLoginAction } from "../../actions/auth/login";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "react-redux";
import Spinner from "../../components/baseSpinner";
import Cookies from "js-cookie";

const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .min(6, "Password should be of minimum 8 characters length")
        .required("Password is required"),
});

const LoginPackage = () => {
    let history = useHistory();

    const [requestLogin] = useActions([requestLoginAction]);
    const { loading } = useSelector(({ loginReducer }) => loginReducer);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                await requestLogin(values);
                if (Cookies.get("token")) {
                    history.push("/users");
                }
            } catch (error) {}
        },
    });

    return (
        <LayoutForm>
            <FormLogin>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <BaseInput
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        variant="outlined"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <BaseInput
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        autoComplete="on"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                    />
                    <BaseButton
                        color="primary"
                        variant="contained"
                        fullWidth
                        disabled={loading}
                        type="submit"
                    >
                        Login
                        {loading && <Spinner />}
                    </BaseButton>
                </form>
                <LinkRouter>
                    <span>Don't you have an Account?</span>
                    <Link to="/register">Register</Link>
                </LinkRouter>
            </FormLogin>
        </LayoutForm>
    );
};

export default LoginPackage;
