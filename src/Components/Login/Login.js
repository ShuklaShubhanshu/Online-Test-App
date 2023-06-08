import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDetail } from "../Registration/UserDetail";
import LoginView from "./LoginView";

const Login = () => {
  const [person, setPerson] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { value, name } = e.target;
    setPerson({ ...person, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(person));
    setIsSubmit(true);
  };


  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);



  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    } else {
      if (UserDetail()) {
        const userlogin = UserDetail().filter((el) => {
          return el.email === values.email && el.password === values.password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          localStorage.setItem("user_login", JSON.stringify(userlogin));
          navigate("/Home");
        }
      }
    }
    return errors;
  };

  const props = {
    handleChange,
    handleSubmit,
    formErrors,
    isSubmit,
  };
  return (
    <>
      <LoginView {...props} />
    </>
  );
};

export default Login;
