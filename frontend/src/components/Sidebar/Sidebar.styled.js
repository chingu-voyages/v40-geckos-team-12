import styled from "styled-components";

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

  &:hover {
    background-color: ${(props) => props.theme.boardHoverBg};
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    color: ${(props) => props.theme.boardHoverTextColor};
  }

`;

export const HideSidebar = styled.div`
  position: absolute;
  bottom: 7%;
  left: 15%;
  display: flex;
  cursor: pointer
 
`
