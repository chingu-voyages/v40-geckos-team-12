import styled from "styled-components";
import {ReactComponent as Kebab} from '../../assets/icon-vertical-ellipsis.svg';

export const ModalWrapper = styled.div`
  background-color: ${(props) => props.theme.modalBackDrop};
  color: #fff;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index:1000;
  left: 0;
  top: 0;
`;

export const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.main};
  max-width: 450px;
  position: relative;
  border-radius: 6px;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  padding: 2em;
`;

export const KebabIcon = styled(Kebab)`
  height: 50px;
  width: 50px;
`;

export const TitleKebabContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.fontColor};
  font-size: 18px;
`;

export const CardDescription = styled.p`
  color: ${(props) => props.theme.secondFontColor};
  font-size: 13px;
  padding: 1.5em 0;
`;

export const SubTaskTitle = styled.p`
  color: ${(props) => props.theme.secondFontColor};
  font-size: 13px;
`;

export const Input = styled.input.attrs({ type: "checkbox" })``;

export const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`
export const LabelText = styled.span`

font-size: 13px;
padding: 1em;
background-color: ${(props) => props.theme.subTaskBG};
width: 100%;
border-radius: 4px;

  ${(props) => {
    switch (props.theme) {
      case "darkMode":
        return `
          color: ${props.theme.fontColor};
          ${Input}:checked + && {
            color: ${props.theme.secondFontColor};
            text-decoration: line-through;
          }
        `;
      default:
        return `
          color: ${props.theme.fontColor};
          ${Input}:checked + && {
            color: ${props.theme.secondFontColor};
            text-decoration: line-through;
          }
        `;
    }
  }}
`;