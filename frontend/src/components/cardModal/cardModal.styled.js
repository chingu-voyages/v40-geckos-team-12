import styled from "styled-components";
import {ReactComponent as Kebab} from '../../assets/icon-vertical-ellipsis.svg';
import iconCheck from '../../assets/icon-check.svg';

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

export const SubTaskContainer = styled.div`
  padding: 1em 0;
`;

export const HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #828FA3;
  background: ${(props) => props.checkActive ? props.theme.fontColorHover : props.theme.main};
  background-image: ${(props) => props.checkActive ? `url(${iconCheck})` : 'none'};
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  transition: all 150ms;
`

export const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  padding: .75em;
  border-radius: 5px;
  background-color: ${(props) => props.theme.subTaskBG};

  &:hover {
    background-color: ${(props) => props.theme.labelHover};
  }
`

export const LabelText = styled.span`
color: ${(props) => props.checkActive ? props.theme.secondFontColor : props.theme.fontColor};
font-size: 13px;
width: 100%;
text-decoration: ${(props) => props.checkActive ? 'line-through' : 'none'};
`;

export const StatusContainer = styled.div``;

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.labelColor};
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  display: block;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: .75em;
  margin-top: 0.5rem;
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.fontColorHover};
  }
`;

export const StyledOption = styled.option`
  color: ${(props) => props.theme.labelColor};
`;