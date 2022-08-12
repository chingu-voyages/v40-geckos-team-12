import styled from "styled-components";
import {ReactComponent as Kebab} from '../../assets/icon-vertical-ellipsis.svg';

export const ModalWrapper = styled.div`
  background-color: rgba(151, 151, 151, 0.8);
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
  color: #fff;
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
  color: ${(props) => props.theme.fontColor};
  font-size: 13px;
  color: #828FA3;
  padding: 1.5em 0;
`;

export const SubTaskTitle = styled.p`
  font-size: 13px;
  color: #828FA3;
`;

export const CheckboxLabel = styled.div`

`