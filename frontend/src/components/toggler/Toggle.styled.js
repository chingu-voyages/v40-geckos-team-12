import styled from "styled-components";

export const ToggleContainer = styled.div`
  border-radius: 6px;
  background-color: ${(props) => props.theme.mainContainer};
  position: absolute;
  bottom: 88px;
  width: 251px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.5em;
`;
