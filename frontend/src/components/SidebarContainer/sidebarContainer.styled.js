import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.main};
  padding: 20px 15px;
  min-height: 100vh;
  width: 300px;
  flex: 1 0 300px;
  position: relative;
`;
