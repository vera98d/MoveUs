import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 10px;
`;

export const Img = styled.img`
  height: 100px;
  align-self: center;
`;

export const RightSection = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightButton = styled.div`
  cursor: pointer;
  margin-left: 20px;
`;

export const Logout = styled.span`
  font-size: 18px;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-weight: bold;
  color: black;
`;

export const PhotoProfile = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid ${(props) => props.theme.colors.secondaryUi};
  border-radius: 50%;
  cursor: pointer;
  background-image: url("${process.env.PUBLIC_URL}/assets/background_photo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
