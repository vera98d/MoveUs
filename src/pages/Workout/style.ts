import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
background: ${(props) => props.theme.colors.background};
padding-top: 150px;
`;

export const Tiles = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
padding: 20px;
@media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Exercise = styled.div`
width: 400px;
height: 200px;
background: ${(props) => props.theme.colors.secondaryUi};
border-radius: 50px;
margin: 20px 40px;
box-shadow: 2px 2px 10px #000;
cursor: pointer;

&:hover {
    transform: scale(1.1);
}

@media (max-width: 600px) {
    max-width: 300px;
    padding: 0 10px;
  }

  @media (max-width: 400px) {
    width: 200px;
  }
`;

export const H3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
font-size: 42px;
font-weight: bold;
font-family: ${(props) => props.theme.fontFamily.primaryFont};
text-align: center;
color: ${(props) => props.theme.colors.white};
}

@media (max-width: 400px) {
  font-size: 32px;
}
`;