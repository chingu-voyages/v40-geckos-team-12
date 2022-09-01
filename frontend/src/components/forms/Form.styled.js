//import styled components
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo-mobile.svg";

export const StyledFormHeader = styled.h2`
  color: ${(props) => props.theme.fontColor};
  ${({ login }) => (login ? "text-align: center;" : null)}
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;
export const StyledLabel = styled.label`
  color: ${(props) => props.theme.labelColor};
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  display: block;
`;
export const StyledAuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F4F7FD;
  width: 100%;
  height: 100vh;
`;
export const StyledFormContainer = styled.div`
  background-color: ${(props) => props.theme.modalBG};
  max-width: 450px;
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 6px;
  padding: 2rem;

  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 343px;
  }
`;

export const StyledAuthForm = styled.form`
  border: 1px solid #828FA3;
  border-radius: 10px;
  box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.15);
  padding: 2em;
  height: fit-content;
  background: #fff;
  width: 375px;

  @media (max-width: 375px){
    width: 325px;
    padding: 1em;
  }
`;

export const StyledForm = styled.form`
  /* position: absolute; */
`;
export const StyledTransparencyLayer = styled.div``;
export const LabelInputContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

export const StyledInput = styled.input`
  color: ${(props) => props.theme.fontColor};
  border: 1px solid ${(props) => props.theme.labelLight};
  background-color: ${(props) => props.theme.modalBG};
  border-radius: 4px;
  padding: 10px;
  font-size: 13px;
  line-height: 16px;
  width: 100%;
  margin-top: 0.5rem;

  cursor: pointer;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.fontColorHover};
  }
`;

export const StyledTextArea = styled.textarea`
  color: ${(props) => props.theme.fontColor};
  border: 1px solid ${(props) => props.theme.labelLight};
  cursor: pointer;
  background-color: ${(props) => props.theme.modalBG};
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  font-size: 13px;
  line-height: 23px;
  margin-top: 0.5rem;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.fontColorHover};
  }
`;
export const StyledButton = styled.button`
  color: ${(props) =>
    props.createTask
      ? props.theme.createTaskText
      : props.theme.createSubTaskText};

  background-color: ${(props) =>
    props.createTask
      ? props.theme.createTaskBtnBG
      : props.theme.createSubtaskBtnBG};
  border: 1px solid
    ${(props) =>
      props.createTask
        ? props.theme.createTaskBtnBG
        : props.theme.createSubtaskBtnBG};
  border-radius: 20px;
  padding: 10px;
  font-size: 13px;
  line-height: 16px;
  width: 100%;
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.7s ease-in-out;
  &:hover {
    outline: none;
    transform: scale(1.1);
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 8px 16px;
  margin-top: 0.5rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.modalBG};
  border: 1px solid ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.fontColor};
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.fontColorHover};
  }
`;
export const StyledOption = styled.option`
  color: ${(props) => props.theme.fontColor};
`;

export const LogoIcon = styled(Logo)`
margin-right: 10px;
`;

export const LogoSpan = styled.div`
  display: flex;
  font-size: 25px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.fontColor};
`;

export const AccountDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;