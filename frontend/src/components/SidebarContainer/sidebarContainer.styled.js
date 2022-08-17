import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.main};
  padding: 20px 15px;
  height: 100vh;
  width: 300px;
  display: block;
  flex: 1 0 300px;
  position: fixed;
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
`;
