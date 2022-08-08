import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.main};
  color: #fff;
  display: grid;
`;

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.fontColor};
`;

export const CardDescription = styled.p`
  color: ${(props) => props.theme.fontColor};
`;
