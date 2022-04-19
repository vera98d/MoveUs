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
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 100%;
  height: 650px;
  max-height: 100%;
  background-image: linear-gradient(180deg, ${(props) => props.theme.colors.primaryUi} 15%, 
  ${(props) => props.theme.colors.tertiaryUi} 100%);
  border: 2px solid ${(props) => props.theme.colors.secondaryUi};
  border-radius: 15px;
  box-shadow: 0 5px 15px ${(props) => props.theme.colors.secondaryUi};
  overflow: auto;
  animation: ${slideIn} 0.8s both ease-in-out;
 
  &::-webkit-scrollbar {
    width: 10px};
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primaryUi};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.white};
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

export const Label = styled.p`
color: ${(props) => props.theme.colors.secondaryUi};
font-family: ${(props) => props.theme.fontFamily.primaryFont};
font-size: 15px;
font-weight: 1000;
`;

export const Input = styled.input`
display: flex;
text-align: left;
padding: 1em;
border: solid 2px ${(props) => props.theme.colors.secondaryUi};
border-radius: 15px;
background-color: ${(props) => props.theme.colors.primaryUi};
font-family: ${(props) => props.theme.fontFamily.primaryFont};
font-size: 15px;
color: ${(props) => props.theme.colors.secondaryUi};
 width: 350px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px ${(props) => props.theme.colors.secondaryUi};
  }
`;

export const GroupDescription = styled.textarea`
display: flex;
text-align: left;
padding: 1em;
border: solid 2px ${(props) => props.theme.colors.secondaryUi};
border-radius: 15px;
background-color: ${(props) => props.theme.colors.primaryUi};
font-family: ${(props) => props.theme.fontFamily.primaryFont};
font-size: 15px;
color: ${(props) => props.theme.colors.secondaryUi};
resize: vertical;
width: 350px;
height: 150px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px ${(props) => props.theme.colors.secondaryUi};
  }
`;

export const AddPhotoButton = styled.button`
   background: none;
   border: none;
   width: 50px;
   height: 50px;
   cursor: pointer;  
   color: ${(props) => props.theme.colors.secondaryUi};
   display: flex;
   align-self: flex-start;
   margin-left: 25px;

   &:hover {
    opacity: 0.5;
   }
`;

export const AddedUsersList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
align-self: center;
list-style: none;
margin-top: 20px;
font-family: ${(props) => props.theme.fontFamily.primaryFont};
font-size: 14px;
`;