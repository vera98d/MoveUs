import styled from "styled-components";

export const Header = styled.h1`
    font-size: ${(props) => props.theme.fontSize.header};
    color: ${(props) => props.theme.colors.secondaryUi};
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    margin-bottom: .4em;
`;

export const Text = styled.p`
    color: ${(props) => props.theme.colors.secondaryUi};
    font-size: ${(props) => props.theme.fontSize.text};
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    margin-bottom: .8em;
`;
