import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.main};
  min-height: 100vh;
  max-width: 300px;
  flex: 1 0 300px;
  position: relative;
  border-right: 2px solid ${(props) => props.theme.subTaskBG};
`;
