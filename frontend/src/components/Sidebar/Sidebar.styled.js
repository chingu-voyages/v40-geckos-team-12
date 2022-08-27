import styled from "styled-components";

export const Container = styled.div`
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  margin-top: .8em;
  margin-right: 1em;
  padding: 0;
`;

export const Brand = styled.div`
  margin-bottom: 3em;
  margin-top: 1.5em;
  padding-left: 1.5em;
`;

export const List = styled.li`
  color: ${(props) => props.theme.secondFontColor};
  font-size: 15px;
  cursor: pointer;
  padding: 15px 0px 15px 0px;
  padding-left: 1.5em;

  &:hover {
    background-color: ${(props) => props.theme.boardHoverBg};
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    color: #635FC7;
  }
`;

export const SpanBoard = styled.span`
  font-size: 12px; 
  letter-spacing: 2px; 
  padding: 2em;
  font-weight: bold;
  text-transform: uppercase;
`

