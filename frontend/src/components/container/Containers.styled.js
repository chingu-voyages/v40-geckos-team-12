import styled from "styled-components";

export const StyledAppContainer = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
`;

export const MasterContainer = styled.div`

    display: flex;

    @media (max-width: 500px){
        height: 100vh;
    }

`;

export const MainContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.mainContainer};
  overflow: hidden;

  @media (max-width: 500px){
    height: 100%;
  }
`;

export const ColumnContainer = styled.div`
    overflow: auto; 
    display: flex;
    height: 100%;

    @media(max-width: 500px){
        margin-top: 1.5em;
    }
`;

