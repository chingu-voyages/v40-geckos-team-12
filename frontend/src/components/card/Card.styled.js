import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.main};
  color: #fff;
  display: grid;
  width: 280px;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.1015);
`;

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.fontColor};
  margin: 10px 0 5px 0;
  font-family: Plus Jakarta Sans;
  font-size: 15px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
`;

export const CardDescription = styled.p`
  color: ${(props) => props.theme.fontColor};
  margin: 10px 0;
  font-family: Plus Jakarta Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
`;
