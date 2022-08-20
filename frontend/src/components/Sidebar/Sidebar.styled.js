import styled from "styled-components";
import {css} from 'styled-components'

export const NavContainer = styled.nav`
  // color: rgb(62,63,78);
`;

export const ListContainer = styled.ul`
  list-style-type: none;
`;

export const Brand = styled.div``;

export const List = styled.li`
  color: ${(props) => props.theme.secondFontColor};
  padding: 10px;
  margin: 12px 0;
  font-size: 15px;
  cursor: pointer;

  &.active{
    background-color: ${(props) => props.theme.createSubTaskText};
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    color: #fff;
  }

  &:hover {
    background-color: ${(props) => props.theme.createSubTaskText};
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    color: #fff;
  }

 
`;

