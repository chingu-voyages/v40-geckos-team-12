import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import {
  LabelInputContainer,
  StyledAuthContainer,
  StyledInput,
  StyledLabel,
  StyledButton,
  StyledForm,
} from "../forms/Form.styled";

//"../../Form.styled";
const Register = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4000/user/register",
        form
      );
      if (data.status === "success") {
        navigate("/login");
      } else {
        setError(true);
        setErrorMessage(data.message);
        setTimeout(() => {
          setError(false);
          setErrorMessage("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <StyledAuthContainer>
        <StyledForm onSubmit={handleSubmit}>
          <LabelInputContainer>
            <StyledLabel>Name</StyledLabel>
            <StyledInput
              type="text"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <StyledLabel>Surname</StyledLabel>
            <StyledInput
              type="text"
              value={form.surname}
              onChange={(e) => {
                setForm({ ...form, surname: e.target.value });
              }}
            />
          </LabelInputContainer>
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
          <Link to="/login">Login</Link>
          {/* Needs styling */}
          <br />
          <span>Already have an account?</span>
          <StyledButton>Register</StyledButton>
        </StyledForm>
      </StyledAuthContainer>
    </>
  );
};

export default Register;
