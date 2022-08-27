import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-color: ${(props) => props.theme.modalBackDrop}; */
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;

  @media (min-width: 500px){
    display: none;
  }
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.modalBG};
  max-width: 264px;
  position: relative;
  border-radius: 6px;
  margin: 0 auto;
  top: 40%;
  transform: translateY(-85%);
  height: 322px;
  padding: 1em 0;
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

export const ListContainer = styled.ul`
  list-style-type: none;
  margin-top: .8em;
  margin-right: 1em;
  padding: 0;
`;
