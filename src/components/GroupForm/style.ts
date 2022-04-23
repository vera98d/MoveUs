import styled from "styled-components";
import Multiselect from "multiselect-react-dropdown";

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
width: 100%;
height: 150px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px ${(props) => props.theme.colors.secondaryUi};
  }
`;

export const GroupImageComponents = styled.div`
display: flex;
flex-direction: row;
align-self: flex-start;
gap: 50px;
`;

export const AddPhotoInput = styled.input`
   display: none;
`;

export const AddPhoto = styled.img`
cursor: pointer;
`;

export const GroupImage = styled.img`
height: 70px;
border-radius: 20px;
`;

export const UsersMultiSelect = styled(Multiselect)`
text-align: left;
border: solid 2px ${(props) => props.theme.colors.secondaryUi};
border-radius: 15px;
background-color: ${(props) => props.theme.colors.primaryUi};
padding: 0.5em;

  .searchBox {
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    font-size: 15px;
    color: ${(props) => props.theme.colors.secondaryUi};
  }
  .searchWrapper {
    border: none;
  }
  .optionListContainer {
    max-width: 320px;
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    font-size: 15px;
    color: ${(props) => props.theme.colors.secondaryUi};
    background-color:${(props) => props.theme.colors.primaryUi};
    border: none;
    overflow: auto;
  }
  .chip {
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    font-size: 15px;
    background-color: ${(props) => props.theme.colors.tenraryUi};
  }
`;