import styled from "styled-components";

export const Container = styled.div`
background-image: linear-gradient(#2A95FF, #D6E7FF);
height: 100vh;
padding-top: 150px;
`;

export const Wrapper = styled.div`
width: 60vw;
margin: 0 auto;
`;

export const Tiles = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
padding: 20px;

@media (max-width: 850px) {
    flex-direction: column;
    padding-bottom: 0;
  }
`;

export const RankTile = styled.div`
width: 200px;
height: 200px;
border: 2px solid ${(props) => props.theme.colors.secondaryUi};
border-radius: 50px;
background-image: url("${process.env.PUBLIC_URL}/assets/ranking.PNG");
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
box-shadow: 2px 2px 10px #000;
cursor: pointer;
filter: opacity(85%);
  -webkit-filter: opacity(85%);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1100px) {
    width: 150px;
    height: 150px;
    border-radius: 25px;
  }

  @media (max-width: 850px) {
    width: 250px;
    height: 150px;
    margin: 0 auto 20px;
  }

  @media (max-width: 450px) {
    width: 150px;
  }
`;

export const GroupsTile = styled.div`
width: 200px;
height: 200px;
border: 2px solid ${(props) => props.theme.colors.secondaryUi};
border-radius: 50px;
background-image: url("${process.env.PUBLIC_URL}/assets/groups.jpg");
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
box-shadow: 2px 2px 10px #000;
cursor: pointer;
filter: opacity(85%);
  -webkit-filter: opacity(85%);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1100px) {
    width: 150px;
    height: 150px;
    border-radius: 25px;
  }

  @media (max-width: 850px) {
    width: 250px;
    height: 150px;
    margin: 0 auto 20px;
  }

  @media (max-width: 450px) {
    width: 150px;
  }
`;

export const ActivityTile = styled.div`
width: 200px;
height: 200px;
border: 2px solid ${(props) => props.theme.colors.secondaryUi};
border-radius: 50px;
background-image: url("${process.env.PUBLIC_URL}/assets/activity.jpg");
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
box-shadow: 2px 2px 10px #000;
cursor: pointer;
filter: opacity(85%);
  -webkit-filter: opacity(85%);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1100px) {
    width: 150px;
    height: 150px;
    border-radius: 25px;
  }

  @media (max-width: 850px) {
    width: 250px;
    height: 150px;
    margin: 0 auto;
  }

  @media (max-width: 450px) {
    width: 150px;
  }
`;

export const WorkoutTile = styled.div`
width: 400px;
height: 200px;
border: 2px solid ${(props) => props.theme.colors.secondaryUi};
border-radius: 50px;
background-image: url("${process.env.PUBLIC_URL}/assets/workout.jpg");
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
box-shadow: 2px 2px 10px #000;
cursor: pointer;
filter: opacity(85%);
  -webkit-filter: opacity(85%);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1100px) {
    width: 300px;
    height: 150px;
    border-radius: 25px;
  }

  @media (max-width: 850px) {
    width: 250px;
    height: 150px;
    margin: 0 auto;
  }

  @media (max-width: 450px) {
    width: 150px;
  }
`;

export const H3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};

  @media (max-width: 1100px) {
    font-size: 32px
  }
`;
