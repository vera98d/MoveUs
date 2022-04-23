import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
background-image: url("${process.env.PUBLIC_URL}/assets/background_photo.jpg");
background-repeat: no-repeat;
background-size: cover;
background-position: 0% 90%;
height: 100vh;
`;

export const Img = styled.img`
position: absolute;
height: 100px;
`;

export const Wrapper = styled.div`
display: flex;
justify-content: flex-end;
height: 100%;
max-width: 1320px;
margin: 0 auto;
padding: 0 10px;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
gap: 20px;
max-width: 400px;
width: 100%;
align-items: stretch;
 `;

export const FormField = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`;

export const Label = styled.p`
color: ${(props) => props.theme.colors.white};
font-family: ${(props) => props.theme.fontFamily.primaryFont};
font-size: 15px;
`;

export const Input = styled.input`
display: flex;
text-align: left;
padding: 1.2em;
border: solid 2px ${(props) => props.theme.colors.secondaryUi};
border-radius: 15px;
background-color: ${(props) => props.theme.colors.primaryUi};
font-family: ${(props) => props.theme.fontFamily.primaryFont};
font-size: 15px;
color: ${(props) => props.theme.colors.secondaryUi};
width: 100%;
max-width: 400px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px ${(props) => props.theme.colors.secondaryUi};
  }
`;

export const Button = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: ${(props) => props.theme.colors.secondaryUi};
  color: ${(props) => props.theme.colors.primaryUi};
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-size: 18px;
  padding: 0.75em 4em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-top: 20px;

   &:hover{
    box-shadow: 0px 0px 10px ${(props) => props.theme.colors.secondaryUi};
  }
`;

export const FormFieldError = styled.span`
color: ${(props) => props.theme.colors.secondaryUi};
font-family: ${(props) => props.theme.fontFamily.primaryFont};
font-size: 15px;
`;

export const AccountText = styled.div`
color: ${(props) => props.theme.colors.white};
font-family: ${(props) => props.theme.fontFamily.primaryFont};
font-size: 18px;
align-self: center;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color:${(props) => props.theme.colors.white};
font-weight: bold;

  &:hover{
    color: ${(props) => props.theme.colors.secondaryUi};
  }
`;
