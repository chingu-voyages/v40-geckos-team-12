import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../../features/slices/userSlice/userSlice";
import axios from "axios";

import { decodeToken } from "react-jwt";

import {
  LabelInputContainer,
  StyledAuthContainer,
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledAuthForm,
  LogoIcon,
  LogoSpan,
  AccountDiv,
} from "../forms/Form.styled";

//"../../Form.styled";
const Login = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}user/login`,
        form
      );

      if (data.status === "success") {
        const decodedToken = decodeToken(data.token);
        const { user } = decodedToken;

        dispatch(login({ user, token: data.token }));
        navigate("/");
      } else {
        console.log("inside else");
        setError(true);
        setErrorMessage(data.message);
        setTimeout(() => {
          setError(false);
          setErrorMessage("");
        }, 3000);
      }
    } catch (error) {
      console.log("Here is the error", error);
    }
  };
  return (
    <>
      <StyledAuthContainer>
        <StyledAuthForm onSubmit={handleSubmit}>
          <LogoSpan>
            <LogoIcon />
            Kanban
          </LogoSpan>
          <LabelInputContainer>
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              type="text"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type="password"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
            />
          </LabelInputContainer>

          <StyledButton>Login</StyledButton>
          <AccountDiv>
            <span>Dont have an account?</span>
            <Link to="/register">Register</Link>
          </AccountDiv>
        </StyledAuthForm>
      </StyledAuthContainer>
    </>
  );
};

export default Login;
