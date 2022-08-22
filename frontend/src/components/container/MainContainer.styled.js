//import styled components
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.mainContainer};
  overflow: hidden;

  @media (max-width: 500px){
    height: 100%;
  }
`;
