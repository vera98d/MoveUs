import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    0% {
      transform: translate(-150%, -50%);
      opacity: 0;
    }
    50% {
      opacity: 100%;
    }
    100% {
      transform: translate(-50%, -50%);
    }
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 650px;
  background-image: linear-gradient(180deg, ${(props) => props.theme.colors.primaryUi} 15%, 
  ${(props) => props.theme.colors.tertiaryUi} 100%);
  border: 2px solid ${(props) => props.theme.colors.secondaryUi};
  border-radius: 15px;
  box-shadow: 0 5px 15px ${(props) => props.theme.colors.secondaryUi};
  animation: ${slideIn} 0.8s both ease-in-out;
`;

export const ModalContent = styled.div`
  top: 20px;
  margin-right: 5px;
  margin-left: 15px;
  overflow-y: scroll;
  height: 100%;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primaryUi};
    border-radius: 5px;
     }
  &::-webkit-scrollbar-track {
    background-image: linear-gradient(180deg, ${(props) => props.theme.colors.primaryUi} 15%, 
  ${(props) => props.theme.colors.tertiaryUi} 100%);
    border-radius: 5px;
    }
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
  z-index: 2;
`;

export const Header = styled.h1`
display: flex;
justify-content: center;
margin: 25px;
font-family: ${(props) => props.theme.fontFamily.primaryFont};
font-size: 24px;
font-weight: 1000;
color: ${(props) => props.theme.colors.secondaryUi};
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 25px;
  height: 25px;
  background: none;
  position: absolute;
  top: 1em;
  right: 1.5em;
  cursor: pointer;
  z-index: 99;

  &:hover {
    opacity: 0.5;
  }
`;

export const ModalLabel = styled.p`
color: ${(props) => props.theme.colors.secondaryUi};
font-family: ${(props) => props.theme.fontFamily.primaryFont};
font-size: 15px;
font-weight: 1000;
`;