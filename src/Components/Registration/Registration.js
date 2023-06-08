import React, { useEffect, useState } from "react";
import RegistrationView from "./RegistrationView";
import {v4 as uuidv4} from "uuid";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate=useNavigate()
  const [inputValue, setInputValue] = useState({
    id:uuidv4(),
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [data] = useState([]);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(inputValue));
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
    }else {
        setTimeout(() => {
            navigate('/Login')
          }, 2000)
        if (window.localStorage.getItem("RegisteredData")) {
          const registerUsers = JSON.parse(
            window.localStorage.getItem("RegisteredData")
          );
          registerUsers.push(inputValue);
          window.localStorage.setItem(
            "RegisteredData",
            JSON.stringify(registerUsers)
          );
        } else {
          window.localStorage.setItem(
            "RegisteredData",
            JSON.stringify([...data, inputValue])
          );
        }
      }
    return errors;
  };

  const props={
        handleChange,
        handleSubmit,
        formErrors,
        isSubmit
  }
  return (
    <div>
      <RegistrationView {...props}/>
    </div>
  );
};

export default Registration;
