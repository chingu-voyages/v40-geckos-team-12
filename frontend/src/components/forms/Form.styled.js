//import styled components
import styled from "styled-components";

export const StyledFormHeader = styled.h2`
  color: ${(props) => props.theme.fontColor};
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

export const StyledFormContainer = styled.div`
  background-color: ${(props) => props.theme.modalBG};
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 480px;
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-40%);
  border-radius: 5px;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 480px;
    left: 144px;
    top: 272px;
  }
  @media (max-width: 480px) {
    width: 343px;
    left: 16px;
    top: 156px;
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
  border: 1px solid ${(props) => props.theme.labelLight};
  border-radius: 4px;
  padding: 10px;
  font-size: 13px;
  line-height: 16px;
  width: 100%;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.fontColorHover};
  }
`;

export const StyledTextArea = styled.textarea`
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
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
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.fontColorHover};
  }
`;
export const StyledOption = styled.option`
  color: ${(props) => props.theme.labelColor};
`;
