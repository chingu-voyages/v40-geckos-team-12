import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.main};
  padding: 20px 15px;
  min-height: 100vh;
   width: 350px;
  position: relative;
  transition: all 2s linear;
  border-right: 2px solid ${(props) => props.theme.subTaskBG};
`;
