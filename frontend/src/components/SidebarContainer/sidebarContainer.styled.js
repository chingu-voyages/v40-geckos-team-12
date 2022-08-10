import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${(props) => props.theme.main};
    width: 15%;
    padding: 20px 15px;
    height: 100%;
    position: fixed;
`;