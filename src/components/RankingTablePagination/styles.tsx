import styled from "styled-components";

interface NavigationButtonProps {
  enabled: boolean;
}

export const NavContainer = styled.div`
    display: flex;
    width: 25%;
    gap: 1em;
    justify-content: center;
    margin-top: 2em;
`;

export const CurrentPageNumber = styled.h2`
    color: ${(props) => props.theme.colors.secondaryUi};
    font-size: ${(props) => props.theme.fontSize.text};
`;

export const NavigationButton = styled.div<NavigationButtonProps>`
    display: block;
    cursor: ${(props) => (props.enabled ? "pointer" : "default")};
    color: ${(props) => (props.enabled ? props.theme.colors.secondaryUi : "#7f8599")};
    font-size: ${(props) => props.theme.fontSize.text};
    font-weight: bold;
    transition: .5s ;
`;