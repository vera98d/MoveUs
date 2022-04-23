import styled from "styled-components";

const BackgroundContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em 3em;
    background: ${(props) => props.theme.colors.background};
`;

export default BackgroundContainer;