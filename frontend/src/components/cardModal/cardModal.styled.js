import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: rgba(151, 151, 151, 0.8);
  color: #fff;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index:1000;
  left: 0;
  top: 0;
`;

export const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.main};
  color: #fff;
  max-width: 400px;
  position: relative;
  border-radius: 6px;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
`;

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.fontColor};
`;

export const CardDescription = styled.p`
  color: ${(props) => props.theme.fontColor};
`;