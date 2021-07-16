import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import BaseButton from "../../components/baseButton";
import BaseInput from "../../components/baseInput";
import { LayoutForm, FormLogin, LinkRouter } from "../design";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import { requestRegisterAction } from "../../actions/auth/register";
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

const RegisterPackage = () => {
    let history = useHistory();

    const [requestRegister] = useActions([requestRegisterAction]);
    const { token, loading } = useSelector(({ loginReducer }) => loginReducer);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                await requestRegister(values);
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
                    Register
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
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        autoComplete="on"
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
                        type="submit"
                    >
                        Register
                        {loading && <Spinner />}
                    </BaseButton>
                </form>
                <LinkRouter>
                    <span>Do you have an Account?</span>
                    <Link to="/login">Login</Link>
                </LinkRouter>
            </FormLogin>
        </LayoutForm>
    );
};

export default RegisterPackage;
