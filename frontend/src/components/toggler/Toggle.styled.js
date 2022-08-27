import styled from "styled-components";

export const ToggleContainer = styled.div`
  border-radius: 6px;
  background-color: ${(props) => props.theme.mainContainer};
  position: absolute;
  bottom: 88px;
  width: 15em;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: 1.5em;

  @media (max-width: 768px){
    width: 11em;
  }

  @media (max-width: 500px){
    bottom: 1em;
    margin-inline: 1em;
    width: 235px;
  }
`;
