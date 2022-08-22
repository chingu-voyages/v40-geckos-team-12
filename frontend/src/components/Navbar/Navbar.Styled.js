import styled from "styled-components";
import { ReactComponent as Kebab } from "../../assets/icon-vertical-ellipsis.svg";
import { ReactComponent as Plus } from "../../assets/icon-add-task-mobile.svg"

export const NavContainer = styled.nav`
  background-color: ${(props) => props.theme.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  border-bottom: 2px solid ${(props) => props.theme.subTaskBG};

  @media (max-width: 770px){
    padding: 10px 15px;
  }

`;

export const NavTitle = styled.h4`
  color: ${(props) => props.theme.fontColor};
  font-weight: 700;
  font-size: 24px;

  @media (max-width: 770px){
    font-size: 20px;
  }
`;

export const NavButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavButton = styled.button`
  width: 165px;
  padding: 13px 24px 13px 24px;
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  background: #635fc7;
  border-radius: 24px;
  margin-right: 24px;
  cursor: pointer;
  width: 100%;
  border: none;

  &:hover {
    background-color: #A8A4FF;
    transition: background-color 0.4s ease;
  }
`;

export const NavMenuIcon = styled.span`
  color: black;
`;

export const KebabIcon = styled(Kebab)``;

export const PlusIcon = styled(Plus)`
  @media (min-width: 635px){
    display: none;
}

`;

export const TaskSpan = styled.span`
  display: inline-block;
  vertical-align: middle;

  @media (max-width: 630px){
    display: none;
  }
`;
