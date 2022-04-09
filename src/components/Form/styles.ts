import styled from "styled-components";

export const Form = styled.form`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 100px;
  gap: 20px;
 `;

export const FormField = styled.div`
display: flex;
  flex-direction: column;
align-items: center;
  gap: 5px;
`;

export const Input = styled.input`
display: flex;
  text-align: center;
  padding: 1em;
  background-color: black;
  color: white;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 15px;
  width: 500px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px rgba(191, 125, 101, 0.77);
  }
`;

export const Button = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-size: 18px;
  padding: 0.75em 2em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const FormFieldError = styled.span`
color: red;
`;