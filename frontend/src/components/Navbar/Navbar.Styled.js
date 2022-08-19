import styled from "styled-components";
import { ReactComponent as Kebab } from "../../assets/icon-vertical-ellipsis.svg";

export const NavContainer = styled.nav`
  background-color: ${(props) => props.theme.main};
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 2px solid ${(props) => props.theme.subTaskBG};
`;

export const NavTitle = styled.h4`
  color: ${(props) => props.theme.fontColor};
  font-weight: 700;
  font-size: 24px;
`;

export const NavButtonWrapper = styled.div`
  display: flex;
  padding-right: 32px;
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
    background-color: ${(props) => props.theme.labelColor};
    transition: background-color 0.4s ease;
  }
`;

export const NavMenuIcon = styled.span`
  color: black;
`;

export const KebabIcon = styled(Kebab)``;
